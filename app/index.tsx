import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Container } from '~/components/container';
import { MainMenu } from '~/components/main-menu';
import { MainSearch } from '~/components/main-search';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Container className="">
        <View className='mt-10'>
        <MainSearch />
        </View>
        <View className='mt-10 mx-5'>
        <MainMenu />
        </View>
      </Container>
    </>
  );
}
