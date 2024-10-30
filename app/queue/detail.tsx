import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Container } from "~/components/container";
import { ScrollView, View } from "react-native";
import { ClinicProfilePoly } from "~/components/clinic-detail";
import { QueueRegistered } from "~/components/queue-registered";

export default function QueueScreen() {

    const { id } = useLocalSearchParams()

    return (
        <>
            <Stack.Screen options={{ title: 'QueueDetail', headerShown: false }} />
            <ScrollView>
            <Container className="mt-10">
                <View className="mt-10 rounded-xl bg-slate-200 p-4">
                    <ClinicProfilePoly name={"Klinik Pratama Duhita"} image="https://dummyimage.com/600x400/4f4f4e/ffffff" address="Unnamed Road, Sekar Putih, SekarPutih, Bagor, Nganjuk Regency, East Java 64461" />
                </View>
                <View className="mt-5">
                <QueueRegistered />
                </View>
            </Container>
            </ScrollView>
        </>
    )
}