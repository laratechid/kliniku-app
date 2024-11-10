import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from './auth-storage';
import { GoogleSignin, isSuccessResponse, isErrorWithCode, statusCodes, User } from '@react-native-google-signin/google-signin';
import { router } from 'expo-router';

const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  getUser: () => User | null;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  getUser: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: async () => {
          GoogleSignin.configure({
            scopes: [
              "https://www.googleapis.com/auth/userinfo.email",
              "https://www.googleapis.com/auth/userinfo.profile"
            ],
            offlineAccess: true,
            webClientId: "46234552556-j426ml0qme8u6rcq9dm2sso84etsag32.apps.googleusercontent.com"
          });
            try {
              await GoogleSignin.hasPlayServices();
              const response = await GoogleSignin.signIn();
              if (isSuccessResponse(response)) {
                // success login
                const { idToken } = response.data
                setSession(idToken);
              } else {
                // sign in was cancelled by user
                console.log("sign in was cancelled by user")
              }
            } catch (error) {
              if (isErrorWithCode(error)) {
                switch (error.code) {
                  case statusCodes.IN_PROGRESS:
                    // operation (eg. sign in) already in progress
                    console.log("in progress")
                    break;
                  case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    // Android only, play services not available or outdated
                    console.log("play services not available or outdated")
                    break;
                  default:
                  // some other error happened
                }
              } else {
                // an error that's not related to google sign in occurred
              }
            }
          router.replace("/")
        },
        signOut: () => {
          GoogleSignin.signOut()
          setSession(null);
        },
        getUser: () => {
          return GoogleSignin.getCurrentUser()
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
