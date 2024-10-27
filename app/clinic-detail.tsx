import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, View, Text, Image, ImageBackground } from 'react-native';

import { Container } from '~/components/container';
import { ImageCarousel } from '~/components-micro/carousel';
import { ClinicProfile } from '~/components/clinic-detail';
import { SimpleGrid } from 'react-native-super-grid';

export default function ClinicDetailScreen() {
  const { images, name, distance, openDays, openSchedule, rating } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ title: 'ClinicList', headerShown: false }} />
      <ScrollView>
        <Container className="mt-10">
          <View className="mt-10 rounded-xl bg-slate-200 p-4">
            <ClinicProfile
              name={name.toString()}
              distance={distance.toString()}
              openDays={openDays.toString()}
              openSchedule={openSchedule.toString()}
              rating={rating.toString()}
            />
          </View>
          <View className="mt-3 rounded-xl border border-slate-100 bg-slate-200 p-2">
            <ImageCarousel images={images.toString().split(',')} />
            <Text className="ms-4 mt-4 text-sm text-slate-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </View>
          <Text className="ms-2 text-sm text-slate-700 mt-8">Pilih Poli</Text>
          <View className='mx-5 mt-3'>
            <SimpleGrid
              data={[1, 2, 3, 4]}
              listKey=""
              spacing={0}
              renderItem={({ item }) => (
                <ImageBackground
                  className="m-3 h-20 w-40 bg-gray-200 rounded-xl mx-auto rounded-lg overflow-hidden"
                  source={{ uri: "https://dummyimage.com/600x400/4f4f4e/ffffff" }} resizeMode="cover"
                >
                  <View className="absolute top-1 right-1 bg-gray-300 px-4 py-1 rounded-full">
                    <Text className="text-gray-600 text-xs">Poli gigi</Text>
                  </View>
                </ImageBackground>
              )}
            />
          </View>
          <Text className="ms-2 text-sm text-slate-700 mt-5">Dukungan Pembayaran</Text>
        </Container>
      </ScrollView>
    </>
  );
}
