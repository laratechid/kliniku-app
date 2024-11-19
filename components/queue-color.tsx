import React from 'react';
import { View, Text } from 'react-native';

enum QueueColor {
      EMPTY = "border border-slate-300",
      BOOKED = 'bg-indigo-100',
      SKIPPED = 'border border-indigo-200',
      ON_GOING = 'bg-emerald-500',
      COMPLETED = 'bg-cyan-600',
    }

export const QueueColorList = () => {
  return (
    <>
      <View className="flex flex-row items-center">
            <View className={`h-3 w-10 mx-5 rounded-lg ${QueueColor.ON_GOING}`}></View>
            <Text className='text-xs text-slate-600'>Sedang Berlangsung</Text>
      </View>
      <View className="flex flex-row items-center">
            <View className={`h-3 w-10 mx-5 rounded-lg ${QueueColor.BOOKED}`}></View>
            <Text className='text-xs text-slate-600'>Sedang Menunggu</Text>
      </View>
      <View className="flex flex-row items-center">
            <View className={`h-3 w-10 mx-5 rounded-lg ${QueueColor.EMPTY}`}></View>
            <Text className='text-xs text-slate-600'>Antrian Kosong</Text>
      </View>
      {/* <View className="flex flex-row items-center">
            <View className={`h-3 w-10 mx-5 rounded-lg ${QueueColor.SKIPPED}`}></View>
            <Text className='text-xs text-slate-600'>Dilewati</Text>
      </View> */}
      <View className="flex flex-row items-center">
            <View className={`h-3 w-10 mx-5 rounded-lg ${QueueColor.COMPLETED}`}></View>
            <Text className='text-xs text-slate-600'>Selesai</Text>
      </View>
    </>
  );
};
