import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native"
import { Container } from "~/components/container";
import { useSession } from "~/components/middleware/context";
import { env } from "~/config/env";
import { request } from "~/helper/request";
import { Response } from "~/interface/response";

export default function BookingSummary() {
    const { session } = useSession()
    const { polyclinicId, sequence } = useLocalSearchParams()
    const [{ message: data }, setData] = useState<Response>({
        statusCode: 200,
        message: {},
      })

    const fetchData = async () =>{
        const data = await request({
            uri: env.klinikuApiUrl + `/book/summary?sequence=${sequence}&polyclinicId=${polyclinicId}`,
            method: "GET",
            token: session as string
        })
        const response: Response = data
        setData(response);
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <Container>
            <View className="mt-24">
                <Text className="text-2xl">Checkout Payment</Text>
            </View>

            <View className="mt-10 rounded-lg bg-slate-300">
                <View className="flex flex-row">
                    <View className="basis-4/12 items-center justify-center">
                        <ImageBackground
                            className="m-5 rounded-full overflow-hidden"
                            source={{ uri: "https://dummyimage.com/600x400/4f4f4e/ffffff" }}
                            resizeMode="cover"
                        >
                            <View className="h-32 w-32 rounded-full">
                            </View>
                        </ImageBackground>
                    </View>
                    <View className="flex-auto bg-slate-200 justify-center">
                        <View className="mx-4">
                            <Text className="text-xl border-b border-slate-400">{data.clinic?.name}</Text>
                            <Text className="text-sm">{data.clinic?.adress}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View className="mt-7 rounded-lg">
                <View className="flex flex-row">
                    <View className="basis-4/12 justify-center">
                        <Text className="ms-5">Poly</Text>
                    </View>
                    <View className="flex-auto justify-center bg-slate-300 rounded-xl">
                        <Text className="m-7">{data.poly?.name}</Text>
                    </View>
                </View>
            </View>

            <View className="mt-5 rounded-lg">
                <View className="flex flex-row">
                    <View className="basis-4/12 justify-center">
                        <Text className="ms-5">Nama Anda</Text>
                    </View>
                    <View className="flex-auto justify-center bg-slate-300 rounded-xl">
                        <Text className="m-7">Sholeh Bakti Abadi</Text>
                    </View>
                </View>
            </View>

            <View className="mt-5 rounded-lg">
                <View className="flex flex-row">
                    <View className="basis-4/12 justify-center">
                        <Text className="ms-5">Antrian</Text>
                    </View>
                    <View className="flex-auto justify-center bg-slate-300 rounded-xl">
                        <Text className="m-7">{sequence}</Text>
                    </View>
                </View>
            </View>

            <View className="mt-20 rounded-lg">
                <View className="flex flex-row">
                    <View className="basis-5/12 justify-center">
                        <Text className="ms-5 text-sm text-slate-700">Biaya Pendaftaran</Text>
                    </View>
                    <View className="flex-auto justify-center rounded-xl">
                        <Text className="text-sm text-slate-700">Rp {data.bookingFee}</Text>
                    </View>
                </View>

                <View className="flex flex-row">
                    <View className="basis-5/12 justify-center">
                        <Text className="ms-5 text-sm text-slate-700">Biaya Platform</Text>
                    </View>
                    <View className="flex-auto justify-center rounded-xl">
                        <Text className="text-sm text-slate-700">Rp {data.platformFee}</Text>
                    </View>
                </View>
            </View>

            <View className="ms-5 my-3 border border-slate-300 w-[50%]"></View>

            <View className="rounded-lg">
                <View className="flex flex-row">
                    <View className="basis-5/12 justify-center">
                        <Text className="ms-5 text-sm">Total</Text>
                    </View>
                    <View className="flex-auto justify-center rounded-xl">
                        <Text className="text-sm">Rp {data.grandTotal}</Text>
                    </View>
                </View>
            </View>

            <Pressable className="mt-10 w-full bg-sky-500 items-center rounded-lg">
                <Text className="text-white font-bold m-3">Lanjut Bayar</Text>
            </Pressable>

        </Container>
    )
}