import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, TextInput } from 'react-native';

import { ImageCarousel } from '~/components-micro/carousel';

export const MainSearch = () => {
  return (
    <>
      <View className="pt-10">
        <View className="flex flex-row items-center rounded-xl bg-indigo-50 ">
          <View className="mx-2 basis-5/6">
            <TextInput
              className="my-3 rounded-xl border border-indigo-200 px-5 py-1 text-gray-500 placeholder:text-gray-300 focus:border-indigo-500 focus:shadow focus:shadow-slate-200 focus:outline-indigo-500"
              placeholder="Cari klinik"
            />
          </View>
          <View className="flex-auto">
            <FontAwesomeIcon icon={faCircleUser} size={40} color="gray" />
          </View>
        </View>
        <View className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-4 shadow shadow-xl">
          <ImageCarousel
            images={[
              'https://dummyimage.com/600x400/4f4f4e/ffffff',
              'https://dummyimage.com/600x400/4f4f4e/ffffff',
            ]}
          />
        </View>
      </View>
    </>
  );
};
