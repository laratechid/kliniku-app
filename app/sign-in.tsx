import { Stack } from "expo-router"
import React from "react"
import { ImageBackground, Text, View } from "react-native"
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
        className={`h-[65%]`}
        source={require('../assets/login/background.png')}
        resizeMode="cover">
        <ContainerFull>
          <View className="mt-60 mx-10">
            <Text className="font-bold text-5xl text-white">
              Sign-In Pake Google
            </Text>
          </View>
          <View className="flex mt-32">
            <View className="h-[85%] pt-10 mx-auto bg-white rounded-xl">
              <Text className="px-10">
                <GoogleSigninButton
                  className="border border-10"
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
      </ImageBackground>
    </>
  )
}
