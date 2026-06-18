const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronApi", {
  startGoogleLogin: async () => {
    const data = await ipcRenderer.invoke("auth:start-login");
    return data;
  },
  onLoginSuccess: (callback) => {
    const subscription = (event, session) => callback(session);
    ipcRenderer.on("auth:success", subscription);

    return () => {
      ipcRenderer.removeListener("auth:success", subscription);
    };
  },
  checkExistingSession: async () => {
    const auth = await ipcRenderer.invoke("auth:check-session");
    return auth;
  },
});
