interface IElectronApi {
  startGoogleLogin: () => void;
  onLoginSuccess: (callback: (session: any) => void) => () => void;
  checkExistingSession: () => Promise<any>;
}

interface Window {
  electronApi: IElectronApi;
}
