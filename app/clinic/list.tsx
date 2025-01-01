import { faFilter, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, View, TextInput, Pressable, Image, Text } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';

import { Container } from '~/components/container';
import { useSession } from '~/components/middleware/context';
import { env } from '~/config/env';
import { request } from '~/helper/request';
import { ResponsePaginate } from '~/interface/response';

export default function ClinicListScreen() {
  const { session } = useSession();
  const [data, setData] = useState<ResponsePaginate>({
    statusCode: 200,
    message: [],
    total: 1,
    totalPage: 1,
    isHasNextPage: false,
  });

  const fetchData = async () => {
    const data = await request({
      uri: env.klinikuApiUrl + '/clinic?page=1&limit=10',
      token: session as string,
    });
    const response: ResponsePaginate = data;
    setData(response);
    return response;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const router = useRouter();

  const routeDetailScreen = (id: number) => {
    router.push({
      pathname: '/clinic/detail',
      params: { id },
    });
  };

  return (
    <>
      <Stack.Screen options={{ title: 'ClinicList', headerShown: false }} />
      <ScrollView>
        <Container className="mt-20 p-6">
          <View className="flex flex-row items-center rounded-xl bg-gray-200">
            <View className="mx-2 basis-5/6">
              <TextInput
                className="my-3 rounded-xl border border-amber-300 px-5 text-gray-500 placeholder:text-gray-300 focus:border-amber-500 focus:shadow focus:shadow-amber-200 focus:outline-amber-500"
                placeholder="Cari klinik"
              />
            </View>
            <View className="flex-auto">
              <FontAwesomeIcon icon={faFilter} size={18} color="gray" />
            </View>
          </View>
          <View>
            {data.message.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => routeDetailScreen(item.id)}
                className="my-1 rounded-xl bg-slate-200">
                <View className="flex flex-row p-2">
                  <View className="basis-1/3">
                    <Image
                      source={{ uri: item.images[0] }}
                      style={{ width: 'auto', height: 100, borderRadius: 10 }}
                      resizeMode="cover"
                    />
                  </View>
                  <View className="basis-8/12">
                    <View className="ms-2">
                      <Text className="mb-1 text-sm text-slate-700">{item.name}</Text>
                      <SimpleGrid
                        data={item.polyclinics}
                        listKey=""
                        spacing={0}
                        itemDimension={70}
                        renderItem={({ item }) => (
                          <View className="m-[1px] rounded-full bg-amber-500 px-2">
                            <Text className="text-xs text-slate-100">{item}</Text>
                          </View>
                        )}
                      />
                      <View className="mt-1 flex flex-row items-center">
                        <FontAwesomeIcon icon={faLocationDot} size={10} color="gray" />
                        <Text className="ms-2 text-xs text-slate-700">{item.distance}</Text>
                      </View>
                      <Text className="text-xs text-slate-700">{item.openSchedule}</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </Container>
      </ScrollView>
    </>
  );
}
