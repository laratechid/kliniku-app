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
      <Container className="bg-slate-200">
        <View className='mt-5'>
        <MainSearch />
        </View>
        <View>
        <MainMenu />
        </View>
      </Container>
    </>
  );
}
