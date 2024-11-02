import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Dimensions, ImageBackground, Pressable } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';

import { ClinicProfile } from '~/components/clinic-detail';
import { Container } from '~/components/container';
import { ImageCarousel } from '~/components-micro/carousel';
import { RowPills } from '~/components-micro/row-pills';
import { Response } from '~/interface/response';
import { env } from '~/config/env';

export default function ClinicDetailScreen() {
  const router = useRouter();
  const { width } = Dimensions.get('window');
  const { id } = useLocalSearchParams();
  const [{ message: data }, setData] = useState<Response>({
    statusCode: 200,
    message: {},
  });

  const fetchData = async () => {
    const get = await fetch( env.klinikuApiUrl + `/clinic/${id}`);
    const response: Response = await get.json();
    setData(response);
    return response;
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <Text className="ms-2 mt-8 text-sm text-slate-700">Pilih Poli</Text>
          <View className="mx-5 mt-3">
            <SimpleGrid
              data={data.polyclinics}
              listKey=""
              spacing={15}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() =>
                    router.push({
                      pathname: '/queue/detail',
                      params: { id: item.id },
                    })
                  }>
                  <ImageBackground
                    className={`h-20 w-[${width / 2}] overflow-hidden rounded-lg rounded-xl bg-gray-200`}
                    source={{ uri: item.poly.image }}
                    resizeMode="cover">
                    <View className="absolute right-1 top-1 rounded-full bg-gray-300 p-1 px-4">
                      <Text className="text-xs text-gray-600">{item.poly.name}</Text>
                    </View>
                  </ImageBackground>
                </Pressable>
              )}
            />
          </View>
          <Text className="ms-2 mt-3 text-sm text-slate-700">Dukungan Pembayaran</Text>
          <View className="mt-3">
            <RowPills data={['BPJS', 'UMUM']} />
          </View>
        </Container>
      </ScrollView>
    </>
  );
}
