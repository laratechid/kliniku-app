import React from 'react';
import { View, Text } from 'react-native';

export const QueueRegistered = ({ totalRegistrant, userCurrentQueue }: { totalRegistrant: number, userCurrentQueue: number }) => {
  return (
    <>
      <View className="flex flex-row rounded-xl bg-slate-200">
        <View className="basis-1/2">
          <View className="flex flex-row">
            <View className="h-24 basis-1/2 items-center justify-center">
              <View className="h-16 w-16 items-center justify-center rounded-xl bg-slate-400">
                <Text className="text-3xl text-slate-700">{totalRegistrant}</Text>
              </View>
            </View>
            <View className="h-24 basis-1/2 justify-center">
              <Text className="text-sm text-slate-700">Total Pasien</Text>
            </View>
          </View>
        </View>

        <View className="basis-1/2">
          <View className="flex flex-row">
            <View className="h-24 basis-1/2 items-center justify-center">
              <View className="h-16 w-16 items-center justify-center rounded-xl bg-slate-400">
                <Text className="text-3xl text-slate-700">{userCurrentQueue}</Text>
              </View>
            </View>
            <View className="h-24 basis-1/2 justify-center">
              <Text className="text-sm text-slate-700">Antrian Anda</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
