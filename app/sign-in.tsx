import { router, Stack } from "expo-router"
import React, { useState } from "react"
import { ImageBackground, Text, View, Image, TextInput, Pressable } from "react-native"
import { ContainerFull } from "~/components/container"
import {
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { useSession } from "~/components/middleware/context";
import { request } from "~/helper/request";
import { env } from "~/config/env";
import { Response } from "~/interface/response";


export default function SignIn() {
  const { isLoading, updateSession, googleSignIn, updateRefreshToken } = useSession();
  const [email, setEmail] =  useState("")
  const [password, setPassword] =  useState("")

  const onPressLogin = async () => {
    const data: Response = await request({
      uri: env.klinikuApiUrl + "/auth/login",
      method: "POST",
      body: { email, password },
    })
    if (data.statusCode == 200){
      updateSession(data.message.token);
      updateRefreshToken(data.message.refreshToken);
      router.replace("/")
    }
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Login', headerShown: false }} />
      <ImageBackground
        className={`h-screen fixed`}
        source={require('../assets/app/background.png')}
        resizeMode="cover">
        <ContainerFull className="justify-center">
          <View>
            <Text className="font-bold text-5xl text-white px-10">
              Sign In Pake Google
            </Text>
          </View>
          <View className="flex mt-28">
            <View className="p-5 py-16 w-[70%] mx-auto bg-white rounded-xl border border-slate-200 shadow shadow-xl items-center">
              <Image
                className="h-32 w-32 rounded-full"
                source={require('../assets/app/logo.png')}
              />
              <Text className="text-slate-400 text-xs text-center my-3">Silahkan login untuk melajutkan ke KliniKu</Text>

              <TextInput
                className="w-full px-3 my-1 rounded-lg border border-indigo-200 text-gray-500 placeholder:text-gray-300 focus:border-indigo-500 focus:shadow focus:shadow-slate-200 focus:outline-indigo-500"
                placeholder="email"
                onChangeText={(e) => setEmail(e)}
              />

              <TextInput
                className="w-full px-3 my-1 rounded-lg border border-indigo-200 text-gray-500 placeholder:text-gray-300 focus:border-indigo-500 focus:shadow focus:shadow-slate-200 focus:outline-indigo-500"
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
              />

              <Pressable
                className="my-1 w-full items-center bg-indigo-400 rounded-xl border border-indigo-400 shadow shadow-slate-700"
                onPress={async () => onPressLogin()}
              >
                <Text className="text-white font-bold m-3">Login</Text>
              </Pressable>

              <View className="w-full my-5 border border-slate-200"></View>

              <Text className="text-slate-400 text-xs text-center">Lanjut dengan google</Text>

              <Text className="text-center">
                <GoogleSigninButton
                  size={GoogleSigninButton.Size.Standard}
                  color={GoogleSigninButton.Color.Light}
                  onPress={() => {
                    googleSignIn();
                  }}
                  disabled={isLoading}
                />;
              </Text>
            </View>
          </View>
        </ContainerFull>
        <View className="absolute bottom-0 w-full py-4">
          <Text className="text-center text-slate-500 text-white text-sm">
            © 2024 By PT Lara Teknologi Studio - V.1.1.2
          </Text>
        </View>
      </ImageBackground>
    </>
  )
}
