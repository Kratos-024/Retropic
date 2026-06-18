interface GoogleLoginModalProps {
  onClose: () => void;
  setUser: any;
}

interface authUser {
  token_type: string;
  scope: string[];
  refresh_token: string;
  id_token: string;
  expires_in: number;
  access_token: string;
}
export { type GoogleLoginModalProps, type authUser };
