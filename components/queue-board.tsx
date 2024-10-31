import React from 'react';
import { View, Text } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';

enum QueueStatus {
  BOOKED = 'BOOKED',
  SKIPPED = 'SKIPPED',
  ON_GOING = 'ON_GOING',
  COMPLETED = 'COMPLETED',
}

enum QueueColor {
  BOOKED = 'bg-slate-300',
  SKIPPED = 'bg-slate-200',
  ON_GOING = 'bg-green-500',
  COMPLETED = 'bg-yellow-500',
}
const colorDecission = (status: string) => {
  switch (status) {
    case QueueStatus.BOOKED:
      return QueueColor.BOOKED;
    case QueueStatus.SKIPPED:
      return QueueColor.SKIPPED;
    case QueueStatus.ON_GOING:
      return QueueColor.ON_GOING;
    case QueueStatus.COMPLETED:
      return QueueColor.COMPLETED;
    default:
      return QueueColor.SKIPPED;
  }
};

interface QueueData {
  id: string;
  sequence: string;
  status: string;
}

export const QueueBoard = ({ queues }: { queues: QueueData[] }) => {
  return (
    <>
      <SimpleGrid
        data={queues}
        listKey=""
        spacing={15}
        itemDimension={40}
        renderItem={({ item }) => (
          <View className="items-center justify-center">
            <View
              className={`h-14 w-14 items-center justify-center rounded-md bg-slate-400 ${colorDecission(item.status)}`}>
              <Text className="text-slate-700">{item.sequence}</Text>
            </View>
          </View>
        )}
      />
    </>
  );
};
