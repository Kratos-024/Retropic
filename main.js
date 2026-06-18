const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");
const http = require("http");
const url = require("url");
const axios = require("axios");
const Store = require("electron-store").default;
const { jwtDecode } = require("jwt-decode");
require("dotenv").config({ path: ".env" });
const CLIENT_ID = process.env.MAIN_VITE_GOOGLE_CLIENT_ID;
const client_secret = process.env.MAIN_VITE_GOOGLE_CLIENT_SECRET;
const REDIRECT_PORT = 42813;
const REDIRECT_URI = `http://localhost:${REDIRECT_PORT}`;

const safeStore = new Store({
  encryptionKey: "your-safe-encryption-key-string",
});

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5173");
  } else {
    win.loadFile(path.join(__dirname, "dist", "index.html"));
  }
}

ipcMain.on("auth:logout", (event) => {
  safeStore.delete("access_token");
  safeStore.delete("refresh_token");
  console.log("Session cleared.");
});

function saveTokens(tokens) {
  safeStore.set("access_token", tokens.access_token);
  if (tokens.refresh_token) {
    safeStore.set("refresh_token", tokens.refresh_token);
  }
  if (tokens.id_token) {
    safeStore.set("id_token", tokens.id_token);
  }
}
async function exchangeCodeForTokens(code) {
  const tokenUrl = "https://oauth2.googleapis.com/token";

  const payload = {
    code,
    client_id: CLIENT_ID,
    client_secret: client_secret,
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
  };

  const response = await axios.post(tokenUrl, new URLSearchParams(payload), {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  return response.data;
}

function startLoopbackServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      if (!req.url) return;

      const parsedUrl = url.parse(req.url, true);
      const queryData = parsedUrl.query;

      if (queryData.code) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(
          "<h1>Authentication successful! You can close this tab now.</h1>",
        );

        server.close();
        resolve(queryData.code);
      } else {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end("<h1>Authentication failed. Missing code.</h1>");
        server.close();
        reject(new Error("No authorization code found."));
      }
    });
    server.listen(REDIRECT_PORT, () => {
      console.log(`Local server listening on port ${REDIRECT_PORT}`);
    });
  });
}
function openGoogleAuth() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "openid",
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  const qs = new URLSearchParams(options).toString();
  const authUrl = `${rootUrl}?${qs}`;

  shell.openExternal(authUrl);
}
ipcMain.handle("auth:start-login", async (event) => {
  try {
    const authCodePromise = startLoopbackServer();
    openGoogleAuth();

    const authCode = await authCodePromise;
    const tokens = await exchangeCodeForTokens(authCode);

    saveTokens(tokens);
    return tokens;
  } catch (error) {
    console.error("Auth flow failed:", error);
  }
});

ipcMain.handle("auth:check-session", async () => {
  const accessToken = safeStore.get("access_token");
  if (!accessToken) return null;
  try {
    const idToken = safeStore.get("id_token");

    if (idToken) {
      const decodedProfile = jwtDecode(idToken);

      return {
        name: decodedProfile.name,
        email: decodedProfile.email,
        picture: decodedProfile.picture,
      };
    }
  } catch (error) {
    console.error("Session restoration failed:", error);
  }

  return null;
});
app.whenReady().then(createWindow);

// async function getValidAccessToken() {
//   const refreshToken = safeStore.get("refresh_token");
//   if (!refreshToken) return null;

//   try {
//     const response = await axios.post(
//       "https://oauth2.googleapis.com/token",
//       new URLSearchParams({
//         client_id: CLIENT_ID,
//         client_secret: "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",
//         refresh_token: refreshToken,
//         grant_type: "refresh_token",
//       }),
//     );

//     safeStore.set("access_token", response.data.access_token);
//     return response.data.access_token;
//   } catch (error) {
//     console.error("Failed to refresh token", error);
//     return null;
//   }
// }
// const decodedProfile = jwtDecode(tokens.id_token);
//     // const sessionInfo = {
//     //   name: decodedProfile.name,
//     //   email: decodedProfile.email,
//     //   picture: decodedProfile.picture,
//     // };
//     // console.log(sessionInfo);
//     // event.sender.send("auth:success", sessionInfo);
