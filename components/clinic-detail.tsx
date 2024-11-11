import {
  faShop,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { ClinicSchedules } from './schedule';

export const ClinicProfile = ({
  name,
  address,
  firstRow,
  schedules
}: {
  name: string;
  address: string;
  firstRow: ReactNode
  schedules?: any[]
}) => {
  return (
    <View>
      <View className="mb-3 flex flex-row flex-wrap items-center border-b border-slate-300 pb-3">
        <FontAwesomeIcon icon={faShop} size={30} color="gray" />
        <Text className="mr-2 ms-4 text-slate-600">{name}</Text>
        <FontAwesomeIcon icon={faCircleCheck} size={15} color="gray" />
      </View>
      <View className="flex flex-row flex-wrap">
          {firstRow}
        <View className="h-24 flex-auto rounded-xl bg-slate-300 p-1">
          <View className="m-auto text-center">
            <Text className="text-xs text-slate-700">Alamat:</Text>
            <Text className="text-xs text-slate-700">{address}</Text>
          </View>
        </View>
      </View>
      <View>
      {schedules ? <ClinicSchedules data={schedules} /> : <></>}
      </View>
    </View>
  );
};
