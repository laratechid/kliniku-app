import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import { Container } from '~/components/container';
import { ImageCarousel } from '~/components-micro/carousel';
import { ClinicProfile } from '~/components/clinic-detail';
import { CardImages } from '~/components-micro/sub-menu';
import { RowPills } from '~/components-micro/row-pills';

export default function ClinicDetailScreen() {
  const { images, name, distance, openDays, openSchedule, rating, polyclinics, paymentSupports } = useLocalSearchParams();
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
            <CardImages titles={polyclinics.toString().split(',')} />
          </View>
          <Text className="ms-2 text-sm text-slate-700 mt-3">Dukungan Pembayaran</Text>
          <View className='mt-3'>
          <RowPills titles={paymentSupports.toString().split(',')}/>
          </View>
        </Container>
      </ScrollView>
    </>
  );
}
