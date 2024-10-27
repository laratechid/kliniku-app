import React from "react";
import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Container } from "~/components/container";
import { useLocalSearchParams } from "expo-router";
import { ImageCarousel } from "~/components-micro/carousel";

export default function ClinicDetailScreen() {
    const { images } = useLocalSearchParams();
    return (
        <>
            <Stack.Screen options={{ title: "ClinicList", headerShown: false }} />
            <ScrollView>
                <Container className="mt-10">
                    <View className="w-auto bg-slate-300 p-4">
                        <ImageCarousel images={images.toString().split(",")} />
                    </View>
                </Container>
            </ScrollView>
        </>
    )
}