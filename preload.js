const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronApi", {
  startGoogleLogin: () => ipcRenderer.send("auth:start-login"),
  onLoginSuccess: (callback) => {
    const subscription = (event, session) => callback(session);
    ipcRenderer.on("auth:success", subscription);

    return () => {
      ipcRenderer.removeListener("auth:success", subscription);
    };
  },
  checkExistingSession: () => ipcRenderer.invoke("auth:check-session"),
});
