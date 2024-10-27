import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, View, TextInput } from 'react-native';

import { ClinicList } from '~/components/clinic-list';
import { Container } from '~/components/container';

export default function ClinicListScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'ClinicList', headerShown: false }} />
      <ScrollView>
        <Container className="mt-20">
          <View className="flex flex-row items-center">
            <View className="mr-4 basis-5/6">
              <TextInput
                className="mx-1 my-3 my-8 rounded-full border border-sky-300 px-3 py-1 text-slate-500 placeholder:text-slate-300 focus:border-sky-500 focus:shadow focus:shadow-sky-200 focus:outline-sky-500"
                placeholder="Cari klinik"
              />
            </View>
            <View className="flex-auto">
              <FontAwesomeIcon icon={faFilter} size={18} color="gray" />
            </View>
          </View>
          <View>
            <ClinicList />
          </View>
        </Container>
      </ScrollView>
    </>
  );
}
