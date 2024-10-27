import React from "react"
import { View, Text } from "react-native"

export const RowPills = ({titles}: { titles: string[] }) => {
    return (
        <View className="flex flex-row pt-3">
            {titles.map((res) => (
                <View className="px-3 py-2 m-2 rounded-lg bg-slate-200 items-center">
                    <Text className="text-slate-700 text-sm">{res}</Text>
                </View>
            ))}
        </View>
    )

}