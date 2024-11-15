import { Stack } from "expo-router"
import React from "react"
import { ImageBackground, Text, View, Image } from "react-native"
import { ContainerFull } from "~/components/container"
import {
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { useSession } from "~/components/middleware/context";


export default function Home() {
  const { signIn } = useSession();

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
              <View className="p-5 py-16 mx-auto bg-white rounded-xl border border-slate-200 shadow shadow-xl items-center">
              <Image
              className="h-32 w-32 rounded-full" 
                source={require('../assets/app/logo.png')}
              />
                  <Text className="text-slate-400 text-xs text-center my-3">Silahkan login untuk melajutkan ke KliniKu</Text>
                <Text className="px-5 text-center">
                  <GoogleSigninButton
                    style={{ shadowOpacity: 10 }}
                    size={GoogleSigninButton.Size.Standard}
                    color={GoogleSigninButton.Color.Light}
                    onPress={() => {
                      signIn();
                    }}
                  //   disabled={isInProgress}
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
