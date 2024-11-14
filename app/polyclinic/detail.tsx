import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, ImageBackground } from 'react-native';

import { ClinicProfile } from '~/components/clinic-detail';
import { Container } from '~/components/container';
import { useSession } from '~/components/middleware/context';
import { QueueBoard } from '~/components/queue-board';
import { QueueRegistered } from '~/components/queue-registered';
import { env } from '~/config/env';
import { polyEvent } from '~/const/event';
import { request } from '~/helper/request';
import { socketService } from '~/service/socket.io';

export default function QueueScreen() {
  const { session } = useSession()
  const { id, clinicName, adress } = useLocalSearchParams<{
    id: string, clinicName: string, adress: string
  }>();
  const [data, setData] = useState<any>({ id: 0, queues: [] });

  useEffect(() => {
    socketService.connect(() => {
      socketService.onEvent(polyEvent(id), (res) => {
        setData(res);
      });
      request({
        uri: env.klinikuApiUrl + `/polyclinic/${id}`,
        token: session as string
      })
    });
    return () => socketService.disconnect();
  }, [id]);

  return (
    <>
      <Stack.Screen options={{ title: 'QueueDetail', headerShown: false }} />
      <ScrollView>
        <Container className="mt-10 p-6">
          <View className="mt-10 rounded-xl bg-slate-200 p-4">

            <ClinicProfile
              name={clinicName}
              address={adress}
              firstRow={<ImageBackground
                className="mr-2 h-24 basis-3/12 overflow-hidden rounded-xl bg-gray-200"
                source={{ uri: `${data.poly?.image}` }}
                resizeMode="cover">
                <View className="absolute right-1 top-1 rounded-full bg-gray-300 p-1 px-4">
                  <Text className="text-xs text-gray-600">{data.poly?.name}</Text>
                </View>
              </ImageBackground>}
            />

          </View>
          <View className="mx-5 mt-10">
            <Text className="mt-3 text-sm text-slate-700">Live Antrian</Text>
            <QueueBoard polyClinicId={id} queues={data.queues} />
          </View>
          <View className="my-5">
            <QueueRegistered totalRegistrant={data.totalRegistrant} userCurrentQueue={24} />
          </View>
        </Container>
      </ScrollView>
    </>
  );
}
