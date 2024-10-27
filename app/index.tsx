import { Stack } from 'expo-router';
import React from 'react';
import { View, ScrollView } from 'react-native';

import { ClinicList } from '~/components/clinic-list';
import { Container } from '~/components/container';
import { MainMenu } from '~/components/main-menu';
import { MainSearch } from '~/components/main-search';
import { PressableSection } from '~/components-micro/pressable-section';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <ScrollView>
        <Container>
          <View className="mt-10">
            <MainSearch />
          </View>
          <View className="mx-5 mt-8">
            <MainMenu />
          </View>
          <View>
            <PressableSection
              title="Klinik Sekitarmu"
              href={{ pathname: '/clinic-list', params: { name: 'Hai' } }}
            />
          </View>
          <View className="mt-5">
            <ClinicList />
          </View>
        </Container>
      </ScrollView>
    </>
  );
}
