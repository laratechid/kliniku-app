import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { Container } from '~/components/container';
import { MainMenu } from '~/components/main-menu';
import { MainSearch } from '~/components/main-search';
import { PressableSection } from '~/components-micro/pressable-section';
import { ClinicList } from '~/components/clinic-list';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Container>
        <View className="mt-10">
          <MainSearch />
        </View>
        <View className="mx-5 mt-8">
          <MainMenu />
        </View>
        <View>
          <PressableSection
            title="Klikik Sekitarmu"
            href={{ pathname: '/details', params: { name: 'Hai' } }}
          />
        </View>
        <View className='mt-5'>
          <ClinicList />
        </View>
      </Container>
    </>
  );
}
