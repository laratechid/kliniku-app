import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Pressable, Image, Text, Button } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';

import { Container } from '~/components/container';
import { MainMenu } from '~/components/main-menu';
import { MainSearch } from '~/components/main-search';
import { PressableSection } from '~/components-micro/pressable-section';
import { ResponsePaginate } from '~/interface/response';
import { env } from '~/config/env';
import { useSession } from '~/components/middleware/context';
import { request } from '~/helper/request';

export default function Home() {
  const { signOut, session } = useSession()
  const [data, setData] = useState<ResponsePaginate>({
    statusCode: 200,
    message: [],
    total: 1,
    totalPage: 1,
    isHasNextPage: false,
  });

  const fetchData = async () => {
    const data = await request({
      uri: env.klinikuApiUrl + "/clinic?page=1&limit=10",
      token: session as string
    })
    const response: ResponsePaginate = data
    setData(response);
    return response;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <ScrollView>
        <Container>
          <View className="mt-10">
            <MainSearch />
          </View>
          <View className="mx-5 mt-8">
            <MainMenu />
          </View>
          <View>
          <Button title='Get User' onPress={() => console.log(session, "token")} />
            <Button title='Logout' onPress={() => signOut()} />
            <PressableSection
              title="Klinik Sekitarmu"
              href={{ pathname: '/clinic/list', params: { name: 'Hai' } }}
            />
          </View>
          <View className="mt-5">
            {data.message.map((item, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  router.push({
                    pathname: '/clinic/detail',
                    params: { id: item.id },
                  })
                }
                className="my-1 rounded-xl bg-slate-300">
                <View className="flex flex-row flex-wrap p-2">
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
                          <View className="m-[1px] rounded-full bg-slate-400 px-2">
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
