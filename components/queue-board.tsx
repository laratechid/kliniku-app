import React from "react"
import { View, Text } from "react-native"
import { SimpleGrid } from "react-native-super-grid"


enum QueueStatus {
    BOOKED = "BOOKED",
    SKIPPED = "SKIPPED",
    ON_GOING = "ON_GOING",
    COMPLETED = "COMPLETED"
}

enum QueueColor {
    BOOKED = "bg-slate-300",
    SKIPPED = "bg-slate-200",
    ON_GOING = "bg-green-500",
    COMPLETED = "bg-yellow-500"
}
const colorDecission = (status: string) => {
    switch (status) {
        case QueueStatus.BOOKED:
            return QueueColor.BOOKED
        case QueueStatus.SKIPPED:
            return QueueColor.SKIPPED
        case QueueStatus.ON_GOING:
            return QueueColor.ON_GOING
        case QueueStatus.COMPLETED:
            return QueueColor.COMPLETED
        default:
            return QueueColor.SKIPPED
    }
}

export const QueueBoard = ({ queues }: { queues: any[] }) => {
    return (
        <>
            <SimpleGrid
                data={queues}
                listKey=""
                spacing={15}
                itemDimension={40}
                renderItem={({ item }) => (
                    <View className="items-center justify-center">
                        <View className={`h-14 w-14 bg-slate-400 rounded-md items-center justify-center ${colorDecission(item.status)}`}>
                            <Text className="text-slate-700">{item.sequence}</Text>
                        </View>
                    </View>
                )}
            />











            {/* <View className="flex flex-row bg-slate-200 rounded-xl">
                <View className="basis-1/2">
                    <View className="flex flex-row">
                        <View className="basis-1/2 h-24 items-center justify-center">
                            <View className="h-20 w-20 bg-slate-400 rounded-xl items-center justify-center">
                                <Text className="text-3xl text-slate-700">30</Text>
                            </View>
                        </View>
                        <View className="basis-1/2 h-24 justify-center">
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
                        <View className="basis-1/2 h-24 justify-center">
                            <Text className="text-sm text-slate-700">Antrian Anda</Text>
                        </View>
                    </View>
                </View>
            </View> */}
        </>
    )
}