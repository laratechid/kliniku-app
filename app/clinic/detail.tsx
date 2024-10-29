import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { Container } from '~/components/container';
import { ImageCarousel } from '~/components-micro/carousel';
import { ClinicProfile } from '~/components/clinic-detail';
import { CardImages } from '~/components-micro/sub-menu';
import { RowPills } from '~/components-micro/row-pills';
import { Response } from '~/interface/response';

export default function ClinicDetailScreen() {
  const { id } = useLocalSearchParams();
  const [{ message : data }, setData] = useState<Response>({
    statusCode: 200,
    message: {}
  })

  const fetchData = async () => {
    const get = await fetch(`http://10.0.2.2:5000/clinic/${id}`);
    const response: Response = await get.json()
    setData(response)
    return response
  }

  useEffect(() => {
    fetchData()
  },[])
  
  return (
    <>
      <Stack.Screen options={{ title: 'ClinicList', headerShown: false }} />
      <ScrollView>
        <Container className="mt-10">
          <View className="mt-10 rounded-xl bg-slate-200 p-4">
            <ClinicProfile
              name={data.name}
              distance={data.distance}
              openDays={data.openDays}
              openSchedule={data.openSchedule}
              rating={data.rating}
            />
          </View>
          <View className="mt-3 rounded-xl border border-slate-100 bg-slate-200 p-2">
            <ImageCarousel images={data.images} />
            <Text className="ms-4 mt-4 text-sm text-slate-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </View>
          <Text className="ms-2 text-sm text-slate-700 mt-8">Pilih Poli</Text>
          <View className='mx-5 mt-3'>
            <CardImages data={data.polyclinics} />
          </View>
          <Text className="ms-2 text-sm text-slate-700 mt-3">Dukungan Pembayaran</Text>
          <View className='mt-3'>
            <RowPills data={["BPJS", "UMUM"]} />
          </View>
        </Container>
      </ScrollView>
    </>
  );
}
