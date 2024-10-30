import React from "react"
import { View, Text } from "react-native"

export const QueueRegistered = () => {
    return (
        <>
            <View className="flex flex-row bg-slate-200 rounded-xl">
                <View className="basis-1/2">
                    <View className="flex flex-row">
                        <View className="basis-1/2 h-24 items-center justify-center">
                            <View className="h-20 w-20 bg-slate-400 rounded-xl items-center justify-center">
                                <Text className="text-3xl text-slate-700">30</Text>
                            </View>
                        </View>
                        <View className="basis-1/2 h-24 items-center justify-center">
                            <Text className="text-sm text-slate-700">Total Pasien</Text>
                        </View>
                    </View>
                </View>


                <View className="basis-1/2">
                    <View className="flex flex-row">
                        <View className="basis-1/2 h-24 items-center justify-center">
                            <View className="h-20 w-20 bg-slate-400 rounded-xl items-center justify-center">
                                <Text className="text-3xl text-slate-700">30</Text>
                            </View>
                        </View>
                        <View className="basis-1/2 h-24 items-center justify-center">
                            <Text className="text-sm text-slate-700">Antrian Anda</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}