import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Container } from "~/components/container";
import { ScrollView, View, Text } from "react-native";
import { ClinicProfilePoly } from "~/components/clinic-detail";
import { QueueRegistered } from "~/components/queue-registered";
import { QueueBoard } from "~/components/queue-board";

const data = [
    {
        sequence: 1,
        status: "COMPLETED"
    },
    {      
        sequence: 2,
        status: "COMPLETED"
    },
    {
        sequence: 3,
        status: "SKIPPED"
    },
    {      
        sequence: 4,
        status: "ON_GOING"
    },
    {
        sequence: 5,
        status: "BOOKED"
    },
    {      
        sequence: 6,
        status: "BOOKED"
    },
    {
        sequence: 7,
        status: "BOOKED"
    },
    {      
        sequence: 8,
        status: "BOOKED"
    },
    {
        sequence: 9,
        status: "BOOKED"
    }
]

export default function QueueScreen() {
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
                    <View className="mt-10 mx-5">
                        <Text className="text-sm text-slate-700 mt-3">Live Antrian</Text>
                        <QueueBoard queues={data} />
                    </View>
                </Container>
            </ScrollView>
        </>
    )
}