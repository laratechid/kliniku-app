import { View, Text } from 'react-native';

export const ClinicSchedules = ({ data }: { data: any[] }) => {
  return (
    <View className="mt-5 flex">
      <Text className="my-2 ms-1 text-xs text-slate-700">Jadwal Buka</Text>
      {data.map((res) => (
        <View className="flex-row">
          <View className={`m-1 w-28 rounded ${res.isToday ? 'bg-yellow-500' : 'bg-indigo-100'}`}>
            <Text className="mx-2 p-1 text-xs text-slate-700">{res.day}</Text>
          </View>
          <View className={`m-1 w-48 rounded ${res.isToday ? 'bg-yellow-500' : 'bg-indigo-100'}`}>
            <Text className="mx-2 p-1 text-center text-xs text-slate-700">{`${res.startTime} - ${res.endTime}`}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
