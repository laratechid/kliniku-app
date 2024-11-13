import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, Pressable } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';
import { QueueColorList } from './queue-color';
import { router } from "expo-router"

enum QueueStatus {
  EMPTY = "EMPTY",
  BOOKED = 'BOOKED',
  SKIPPED = 'SKIPPED',
  ON_GOING = 'ON_GOING',
  COMPLETED = 'COMPLETED',
}

enum QueueColor {
  EMPTY = "border border-slate-300",
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

export const QueueBoard = ({ polyclinicId ,queues }: { polyclinicId : string, queues: QueueData[] }) => {
  const [sequence, setSequence] = useState("0")
  const [isModalVisible, setModalVisible] = useState(false);

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
              onPress={() => {
                setSequence(item.sequence);
                setModalVisible(true)
              }}
              disabled={item.status == "EMPTY" ? false : true}
              className={`h-14 w-14 items-center justify-center rounded-md ${colorDecission(item.status)}`}>
              <Text className={`${item.status == "EMPTY" ? 'text-slate-300' : 'text-slate-600'}`}>{item.sequence}</Text>
            </Pressable>
          </View>
        )}
      />
      <View className='mb-10'>
        <QueueColorList />
      </View>

      <Modal
        animationIn={"fadeIn"}
        animationOut={"fadeOut"}
        isVisible={isModalVisible}
        onBackButtonPress={()=> setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View className='flex-1 justify-end'>
          <View className='px-16 py-20 rounded-xl bg-slate-50 justify-center items-center'>
            <Text className="text-sm text-slate-500 text-center">Apakah anda yakin memilih antrian {sequence}, selalu pantau live antrian untuk estimasi kehadiran anda di klinik</Text>
            <View className="mt-5 h-20 w-48 items-center justify-center rounded-xl border-2 border-slate-300 ">
              <Text className="text-3xl text-slate-700">{sequence}</Text>
            </View>
            <Pressable
              className='p-3 m-3 bg-green-500 rounded-xl border border-green-600'
              onPress={() =>
                router.push({
                  pathname: '/booking/summary',
                  params: { polyclinicId, sequence},
                })
              }
              >
              <Text className='text-slate-100 font-bold'>Booking Antrian</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};
