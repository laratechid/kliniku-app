import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { ClinicProfilePoly } from '~/components/clinic-detail';
import { Container } from '~/components/container';
import { QueueBoard } from '~/components/queue-board';
import { QueueRegistered } from '~/components/queue-registered';
import { polyEvent } from '~/const/event';
import { socketService } from '~/service/socket.io';

export default function QueueScreen() {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState<any>({ id: 0, queues: [] });

  const fetchData = () => {
    fetch(`http://10.0.2.2:5000/polyclinic/${id}`);
  };

  useEffect(() => {
    socketService.connect();
    fetchData();
    socketService.onEvent(polyEvent(id.toString()), (res) => {
      setData(res);
    });
    // TODO => Disconnect socket when move to another screen
    // return () => socketService.disconnect();
  }, []);
  return (
    <>
      <Stack.Screen options={{ title: 'QueueDetail', headerShown: false }} />
      <ScrollView>
        <Container className="mt-10">
          <View className="mt-10 rounded-xl bg-slate-200 p-4">
            <ClinicProfilePoly
              name="Klinik Pratama Duhita"
              image="https://dummyimage.com/600x400/4f4f4e/ffffff"
              address="Unnamed Road, Sekar Putih, SekarPutih, Bagor, Nganjuk Regency, East Java 64461"
            />
          </View>
          <View className="mt-5">
            <QueueRegistered />
          </View>
          <View className="mx-5 mt-10">
            <Text className="mt-3 text-sm text-slate-700">Live Antrian</Text>
            <QueueBoard queues={data.queues} />
          </View>
        </Container>
      </ScrollView>
    </>
  );
}
