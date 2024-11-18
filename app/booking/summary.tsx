import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native"
import Modal from "react-native-modal";
import { Container } from "~/components/container";
import { useSession } from "~/components/middleware/context";
import { env } from "~/config/env";
import { request } from "~/helper/request";
import { Response } from "~/interface/response";

export default function BookingSummary() {
    const { session } = useSession()
    const [isModalVisible, setModalVisible] = useState(false);
    const { polyClinicId, sequence } = useLocalSearchParams()
    const [{ message: data }, setData] = useState<Response>({
        statusCode: 200,
        message: {},
    })

    const fetchData = async () => {
        const data = await request({
            uri: env.klinikuApiUrl + `/book/summary?sequence=${sequence}&polyClinicId=${polyClinicId}`,
            method: "GET",
            token: session as string
        })
        const response: Response = data
        setData(response);
    }

    const bookQueue = async () => {
        await request({
            uri: env.klinikuApiUrl + "/book/queue",
            method: "POST",
            token: session as string,
            body: { polyClinicId, sequence }
        })
        setModalVisible(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Container className="p-6 h-screen">
            <View className="mt-24">
                <Text className="text-2xl text-white font-bold">Checkout Payment</Text>
            </View>

            <View className="mt-10 rounded-xl bg-indigo-300">
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
                    <View className="flex-auto bg-indigo-200 justify-center">
                        <View className="mx-4">
                            <Text className="text-slate-600 text-xl font-bold border-b border-slate-400">{data.clinic?.name}</Text>
                            <Text className="text-slate-500 text-xs">{data.clinic?.adress}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View className="mt-7 rounded-lg">
                <View className="flex flex-row">
                    <View className="basis-4/12 justify-center">
                        <Text className="text-slate-500 ms-5">Poli</Text>
                    </View>
                    <View className="flex-auto justify-center bg-indigo-50 rounded-xl">
                        <Text className="text-slate-500 m-7">{data.poly?.name}</Text>
                    </View>
                </View>
            </View>

            <View className="mt-5 rounded-lg">
                <View className="flex flex-row">
                    <View className="basis-4/12 justify-center">
                        <Text className="text-slate-500 ms-5">Nama Anda</Text>
                    </View>
                    <View className="flex-auto justify-center bg-indigo-50 rounded-xl">
                        <Text className="text-slate-500 m-7">Sholeh Bakti Abadi</Text>
                    </View>
                </View>
            </View>

            <View className="mt-5 rounded-lg">
                <View className="flex flex-row">
                    <View className="basis-4/12 justify-center">
                        <Text className="text-slate-500 ms-5">Antrian</Text>
                    </View>
                    <View className="flex-auto justify-center bg-indigo-50 rounded-xl">
                        <Text className="text-slate-500 m-7">{sequence}</Text>
                    </View>
                </View>
            </View>

            <View className="mt-20 rounded-lg">
                <View className="flex flex-row">
                    <View className="basis-5/12 justify-center">
                        <Text className="ms-5 text-sm text-slate-500">Biaya Pendaftaran</Text>
                    </View>
                    <View className="flex-auto justify-center rounded-xl">
                        <Text className="text-sm text-slate-500">Rp {data.bookingFee}</Text>
                    </View>
                </View>

                <View className="flex flex-row">
                    <View className="basis-5/12 justify-center">
                        <Text className="ms-5 text-sm text-slate-500">Biaya Platform</Text>
                    </View>
                    <View className="flex-auto justify-center rounded-xl">
                        <Text className="text-sm text-slate-500">Rp {data.platformFee}</Text>
                    </View>
                </View>
            </View>

            <View className="ms-5 my-3 border border-slate-300 w-[50%]"></View>

            <View className="rounded-lg">
                <View className="flex flex-row">
                    <View className="basis-5/12 justify-center">
                        <Text className="ms-5 text-sm font-bold text-slate-500">Total</Text>
                    </View>
                    <View className="flex-auto justify-center rounded-xl">
                        <Text className="text-sm font-bold text-slate-500">Rp {data.grandTotal}</Text>
                    </View>
                </View>
            </View>

            <Pressable
                className="mt-10 w-full items-center bg-indigo-400 rounded-xl border border-indigo-400 shadow shadow-slate-700"
                onPress={() => setModalVisible(true)}
            >
                <Text className="text-white font-bold m-3">Lanjut Bayar</Text>
            </Pressable>

            <Modal
                animationIn={"fadeIn"}
                animationOut={"fadeOut"}
                isVisible={isModalVisible}
                onBackButtonPress={() => setModalVisible(false)}
                onBackdropPress={() => setModalVisible(false)}
            >
                <View className="flex-1 justify-end">
                    <View className='px-16 py-20 rounded-xl bg-slate-50 justify-center items-center'>
                        <Text className="text text-slate-500 text-center">Lanjut Ke Pembayaran, anda akan di arahkan ke page pembayaran</Text>
                        <Pressable
                            className="mt-10 w-full items-center bg-indigo-400 rounded-xl border border-indigo-400 shadow shadow-slate-700"
                            onPress={async () => await bookQueue()}
                        >
                            <Text className="text-white font-bold m-3">Bayar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

        </Container>
    )
}