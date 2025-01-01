import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { router, Stack } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, Text, View, Image, TextInput, Pressable } from 'react-native';

import { ContainerFull } from '~/components/container';
import { useSession } from '~/components/middleware/context';
import { env } from '~/config/env';
import { request } from '~/helper/request';
import { Response } from '~/interface/response';

export default function SignIn() {
  const { isLoading, updateSession, googleSignIn, updateRefreshToken } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = async () => {
    const data: Response = await request({
      uri: env.klinikuApiUrl + '/auth/login',
      method: 'POST',
      body: { email, password },
    });
    if (data.statusCode == 200) {
      updateSession(data.message.token);
      updateRefreshToken(data.message.refreshToken);
      router.replace('/');
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Login', headerShown: false }} />
      <ImageBackground
        className="fixed h-screen"
        source={require('../assets/app/background.png')}
        resizeMode="cover">
        <ContainerFull className="justify-center">
          <View>
            <Text className="px-10 text-4xl font-bold text-white">
              Silahkan Login untuk melanjutkan
            </Text>
          </View>
          <View className="mt-28 flex">
            <View className="mx-auto w-[70%] items-center rounded-xl border border-slate-200 bg-white p-5 py-16 shadow shadow-xl">
              <Image
                className="h-32 w-32 rounded-full"
                source={require('../assets/app/logo.png')}
              />
              <Text className="my-3 text-center text-xs text-slate-400">
                Silahkan login untuk melajutkan ke KliniKu
              </Text>

              <TextInput
                className="my-1 w-full rounded-lg border border-indigo-200 px-3 text-gray-500 placeholder:text-gray-300 focus:border-indigo-500 focus:shadow focus:shadow-slate-200 focus:outline-indigo-500"
                placeholder="email"
                onChangeText={(e) => setEmail(e)}
              />

              <TextInput
                className="my-1 w-full rounded-lg border border-indigo-200 px-3 text-gray-500 placeholder:text-gray-300 focus:border-indigo-500 focus:shadow focus:shadow-slate-200 focus:outline-indigo-500"
                placeholder="password"
                secureTextEntry
                onChangeText={(e) => setPassword(e)}
              />

              <Pressable
                className="my-1 w-full items-center rounded-xl border border-indigo-400 bg-indigo-400 shadow shadow-slate-700"
                onPress={async () => onPressLogin()}>
                <Text className="m-3 font-bold text-white">Login</Text>
              </Pressable>

              <View className="my-5 w-full border border-slate-200" />

              <Text className="text-center text-xs text-slate-400">Lanjut dengan google</Text>

              <Text className="text-center">
                <GoogleSigninButton
                  size={GoogleSigninButton.Size.Standard}
                  color={GoogleSigninButton.Color.Light}
                  onPress={() => {
                    googleSignIn();
                  }}
                  disabled={isLoading}
                />
                ;
              </Text>
            </View>
          </View>
        </ContainerFull>
        <View className="absolute bottom-0 w-full py-4">
          <Text className="text-center text-sm text-slate-500 text-white">
            © 2024 By PT Lara Teknologi Studio - V.1.1.2
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}
