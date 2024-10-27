import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';

import { clinicList } from '~/const/static/menu';
import { Clinic } from '~/interface/clinic';

export const ClinicList = () => {
  return clinicList.map((item: Clinic, index: number) => {
    return (
      <>
          <Link href={{ pathname: "/clinic-detail", params: { images: item.images } }} asChild >
            <Pressable key={index} className="my-1 rounded-xl bg-slate-300">
              <View className="flex flex-row flex-wrap p-2">
                <View className="basis-1/3">
                  <Image
                    source={{ uri: item.images[0] }}
                    style={{ width: 'auto', height: 100, borderRadius: 10 }}
                    resizeMode="cover"
                  />
                </View>
                <View className="basis-8/12">
                  <View className="ms-2">
                    <Text className="mb-1 text-sm text-slate-700">{item.name}</Text>
                    <SimpleGrid
                      data={item.polyclinics}
                      listKey=""
                      spacing={0}
                      itemDimension={70}
                      renderItem={({ item }) => (
                        <View className="m-[1px] rounded-full bg-slate-400 px-2">
                          <Text className="text-xs text-slate-100">{item}</Text>
                        </View>
                      )}
                    />
                    <View className="mt-1 flex flex-row items-center">
                      <FontAwesomeIcon icon={faLocationDot} size={10} color="gray" />
                      <Text className="ms-2 text-xs text-slate-700">{item.distance}</Text>
                    </View>
                    <Text className="text-xs text-slate-700">{item.openSchedule}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>
      </>
    );
  });
};
