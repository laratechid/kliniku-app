import { faShop, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { ReactNode } from 'react';
import { View, Text, Image } from 'react-native';

import { ClinicSchedules } from './schedule';

export const ClinicProfile = ({
  name,
  address,
  firstRow,
  imageProfile,
  schedules,
}: {
  name: string;
  address: string;
  firstRow: ReactNode;
  imageProfile: string;
  schedules?: any[];
}) => {
  return (
    <View>
      <View className="mb-3 flex flex-row flex-wrap items-center border-b border-indigo-200 pb-3">
        <Image className="h-16 w-16 rounded-full" source={{ uri: imageProfile }} />
        <Text className="mr-2 ms-4 text-slate-600">{name}</Text>
        <FontAwesomeIcon icon={faCircleCheck} size={15} color="gray" />
      </View>
      <View className="flex flex-row flex-wrap">
        {firstRow}
        <View className="h-24 flex-auto rounded-xl border border-indigo-200 bg-indigo-100 p-1">
          <View className="m-auto text-center">
            <Text className="text-xs text-slate-700">Alamat:</Text>
            <Text className="text-xs text-slate-700">{address}</Text>
          </View>
        </View>
      </View>
      <View>{schedules ? <ClinicSchedules data={schedules} /> : <></>}</View>
    </View>
  );
};
