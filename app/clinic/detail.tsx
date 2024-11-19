import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Dimensions, ImageBackground, Pressable } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';

import { ClinicProfile } from '~/components/clinic-detail';
import { Container } from '~/components/container';
import { ImageCarousel } from '~/components-micro/carousel';
import { Response } from '~/interface/response';
import { env } from '~/config/env';
import { useSession } from '~/components/middleware/context';
import { request } from '~/helper/request';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ClinicDetailScreen() {
  const { session } = useSession()
  const router = useRouter();
  const { width } = Dimensions.get('window');
  const { id } = useLocalSearchParams();
  const [{ message: data }, setData] = useState<Response>({
    statusCode: 200,
    message: {},
  });

  const fetchData = async () => {
    const data = await request({
      uri: env.klinikuApiUrl + `/clinic/${id}`,
      token: session as string
    })
    const response: Response = data
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
        <Container className="mt-10 p-6">
          <View className="mt-10 rounded-xl bg-slate-50 p-4 border border-indigo-200">

            <ClinicProfile
              name={data.name}
              address={data.adress}
              imageProfile={data.imageProfile}
              schedules={data.schedules}
              firstRow={
                <View className="mr-2 h-24 basis-3/12 overflow-hidden rounded-xl justify-center items-center border border-indigo-300">
                  <View className="flex flex-row flex-wrap">
                    <Text className="ms-1 mt-1 text-sm text-slate-500">Rating</Text>
                  </View>
                  <View className="flex flex-row flex-wrap items-center">
                    <FontAwesomeIcon icon={faStar} size={15} color="orange" />
                    <Text className="ms-1 mt-1 text-slate-500">{data.rating}</Text>
                  </View>
                </View>
              }
            />
          </View>

          <View className="mt-3 rounded-xl border border-indigo-200 bg-indigo-50 p-2">
            <ImageCarousel images={data.images} />
            <Text className="ms-4 mt-4 text-sm text-slate-700">{data.vision}
            </Text>
          </View>
          <Text className="ms-2 mt-8 text-sm text-slate-700">Pilih Layanan</Text>
          <View className="mx-5 mt-3">
            <SimpleGrid
              data={data.polyclinics}
              listKey=""
              spacing={15}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() =>
                    router.push({
                      pathname: '/polyclinic/detail',
                      params: { id: item.id, clinicName: data.name, adress: data.adress, imageProfile: data.imageProfile },
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
            <View className="flex flex-row">
              {data.paymentSupports?.map((res: string) => (
                <View className="m-2 items-center rounded-lg bg-slate-200 px-3 py-2">
                  <Text className="text-sm text-slate-700">{res}</Text>
                </View>
              ))}
            </View>
          </View>
        </Container>
      </ScrollView>
    </>
  );
}
