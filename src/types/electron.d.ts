interface IElectronApi {
  startGoogleLogin: () => Promise<authUser>;
  onLoginSuccess: (callback: (session: any) => void) => () => void;
  checkExistingSession: () => Promise<any>;
}

interface Window {
  electronApi: IElectronApi;
}
