import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, TextInput, Image } from 'react-native';

export const MainSearch = () => {
  return (
    <>
      <View className="h-80 rounded-xl bg-slate-200 py-5">
        <View className="mx-auto flex flex-row items-center">
          <View className="basis-5/6">
            <TextInput
              className="mx-2 my-3 rounded-full border border-sky-300 px-3 py-1 text-slate-500 placeholder:text-slate-300 focus:border-sky-500 focus:shadow focus:shadow-sky-200 focus:outline-sky-500"
              placeholder="Cari klinik"
            />
          </View>
          <View>
            <FontAwesomeIcon icon={faCircleUser} size={40} color="gray" />
          </View>
        </View>
        <View className="p-5 ">
          <Image
            source={require('../assets/home/banner/mainbanner.jpg')}
            style={{ width: 'auto', height: 155, borderRadius: 10 }}
            resizeMode="cover"
          />
        </View>
      </View>
    </>
  );
};
