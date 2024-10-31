import React from 'react';
import { View, Text } from 'react-native';

export const RowPills = ({ data }: { data: string[] }) => {
  return (
    <View className="flex flex-row">
      {data.map((res) => (
        <View className="m-2 items-center rounded-lg bg-slate-200 px-3 py-2">
          <Text className="text-sm text-slate-700">{res}</Text>
        </View>
      ))}
    </View>
  );
};
