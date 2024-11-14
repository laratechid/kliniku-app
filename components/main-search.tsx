import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, TextInput, Image } from 'react-native';
import { ImageCarousel } from '~/components-micro/carousel';

export const MainSearch = () => {
  return (
    <>
      <View className="rounded-xl pt-10">
        <View className="flex flex-row items-center bg-gray-200 rounded-xl">
          <View className="basis-5/6 mx-2">
            <TextInput
              className="my-3 px-5 py-1 rounded-xl border border-amber-300 text-gray-500 placeholder:text-gray-300 focus:border-amber-500 focus:shadow focus:shadow-amber-200 focus:outline-amber-500"
              placeholder="Cari klinik"
            />
          </View>
          <View className='flex-auto'>
            <FontAwesomeIcon icon={faCircleUser} size={40} color="gray" />
          </View>
        </View>
        <View className="p-4 mt-5 bg-slate-200 rounded-xl shadow shadow-lg">
        <ImageCarousel images={["https://dummyimage.com/600x400/4f4f4e/ffffff", "https://dummyimage.com/600x400/4f4f4e/ffffff"]} />
        </View>
      </View>
    </>
  );
};
