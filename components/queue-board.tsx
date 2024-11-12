import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';

enum QueueStatus {
  EMPTY = "EMPTY",
  BOOKED = 'BOOKED',
  SKIPPED = 'SKIPPED',
  ON_GOING = 'ON_GOING',
  COMPLETED = 'COMPLETED',
}

enum QueueColor {
  EMPTY = "border border-slate-200",
  BOOKED = 'bg-slate-300',
  SKIPPED = 'bg-slate-100 border border-slate-200',
  ON_GOING = 'bg-amber-400 border border-green-400 h-16 w-16',
  COMPLETED = 'bg-green-400',
}
const colorDecission = (status: string) => {
  switch (status) {
    case QueueStatus.EMPTY:
      return QueueColor.EMPTY;
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
            <Pressable
              onPress={()=> console.log(`pressed ${item.sequence}`)}
              disabled={false}
              className={`h-14 w-14 items-center justify-center rounded-md ${colorDecission(item.status)}`}>
              <Text className="text-slate-600">{item.sequence}</Text>
            </Pressable>
          </View>
        )}
      />
    </>
  );
};
