import {
  faShop,
  faStar,
  faLocationDot,
  faClock,
  faCalendarDays,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import { Container } from '~/components/container';
import { ImageCarousel } from '~/components-micro/carousel';

export default function ClinicDetailScreen() {
  const { images } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ title: 'ClinicList', headerShown: false }} />
      <ScrollView>
        <Container className="mt-10">
          <View className="mt-10 rounded-xl bg-slate-200 p-4">
            <View>
              <View className="mb-3 flex flex-row flex-wrap items-center border-b border-slate-300 pb-3">
                <FontAwesomeIcon icon={faShop} size={30} color="gray" />
                <Text className="mr-2 ms-4 text-slate-600">Klinik Pratama Sehat</Text>
                <FontAwesomeIcon icon={faCircleCheck} size={15} color="gray" />
              </View>
              <View className="ms-1 flex flex-row flex-wrap items-center">
                <FontAwesomeIcon icon={faLocationDot} size={10} color="gray" />
                <Text className="ms-3 mt-1 text-xs text-slate-500">Nganjuk</Text>
              </View>
              <View className="ms-1 flex flex-row flex-wrap items-center">
                <FontAwesomeIcon icon={faStar} size={10} color="gray" />
                <Text className="ms-3 mt-1 text-xs text-slate-500">4.5</Text>
              </View>
              <View className="ms-1 flex flex-row flex-wrap items-center">
                <FontAwesomeIcon icon={faCalendarDays} size={10} color="gray" />
                <Text className="ms-3 mt-1 text-xs text-slate-500">Senin - Jumat</Text>
              </View>
              <View className="ms-1 flex flex-row flex-wrap items-center">
                <FontAwesomeIcon icon={faClock} size={10} color="gray" />
                <Text className="ms-3 mt-1 text-xs text-slate-500">08:30 - 21:00</Text>
              </View>
            </View>
          </View>
          <View className="mt-5 rounded-xl border border-slate-100 bg-slate-200 p-2">
            <ImageCarousel images={images.toString().split(',')} />
            <Text className="ms-4 mt-4 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </View>
        </Container>
      </ScrollView>
    </>
  );
}
