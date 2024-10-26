import React from "react"
import { View, Text, Image } from "react-native"
import { SimpleGrid } from "react-native-super-grid"
import { mainMenu } from "~/const/menu"

export const MainMenu = () => {
    return (
        <>
            <View className="justify-center">
            <SimpleGrid
                listKey={""}
                data={mainMenu}
                itemDimension={70}
                renderItem={({ item }) => (
                <View className="items-center m-3">
                    <Image source={require("../assets/favicon.png")} style={{width: 40, height: 40}} />
                    <Text className="text-xs text-slate-500">{item}</Text>
                </View>
            )}
            />
            </View>
        </>
    )
}