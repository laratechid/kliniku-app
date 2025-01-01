import {
  GoogleSignin,
  isSuccessResponse,
  isErrorWithCode,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { router } from 'expo-router';
import { useContext, createContext, type PropsWithChildren } from 'react';

import { useStorageState } from './auth-storage';

import { env } from '~/config/env';
import { request } from '~/helper/request';
import { Response } from '~/interface/response';

const AuthContext = createContext<{
  updateSession: (token: string) => void;
  updateRefreshToken: (token: string) => void;
  googleSignIn: () => void;
  signOut: () => void;
  session?: string | null;
  refreshToken?: string | null;
  isLoading: boolean;
}>({
  updateSession: () => null,
  updateRefreshToken: () => null,
  googleSignIn: () => null,
  signOut: () => null,
  session: null,
  refreshToken: null,
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
  const [[_, refreshToken], setRefreshToken] = useStorageState('refreshToken');

  return (
    <AuthContext.Provider
      value={{
        updateSession: (token) => {
          setSession(token);
        },
        updateRefreshToken: (token) => {
          setRefreshToken(token);
        },
        googleSignIn: async () => {
          GoogleSignin.configure({
            webClientId: env.googleOauthWebClientId,
          });
          try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            if (isSuccessResponse(response)) {
              // success login
              const { idToken } = response.data;
              const data: Response = await request({
                uri: env.klinikuApiUrl + '/auth/google/register',
                method: 'POST',
                body: { idToken },
              });
              if (data.statusCode == 200) {
                setSession(data.message.token);
                setRefreshToken(data.message.refreshToken);
                router.replace('/');
              }
            } else {
              // sign in was cancelled by user
              console.log('sign in was cancelled by user');
            }
          } catch (error) {
            if (isErrorWithCode(error)) {
              switch (error.code) {
                case statusCodes.IN_PROGRESS:
                  // operation (eg. sign in) already in progress
                  console.log('in progress');
                  break;
                case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                  // Android only, play services not available or outdated
                  console.log('play services not available or outdated');
                  break;
                default:
                // some other error happened
              }
            } else {
              // an error that's not related to google sign in occurred
            }
          }
        },
        signOut: () => {
          GoogleSignin.signOut();
          setSession(null);
        },
        session,
        refreshToken,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
