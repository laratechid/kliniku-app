import React from "react"
import { View, Text, StyleProp, ViewStyle, Image } from "react-native"
import { SimpleGrid } from "react-native-super-grid"
import { mainMenu } from "~/const/menu"


const style: StyleProp<ViewStyle> = {  }
export const MainMenu = () => {
    return (
        <>
            <View className="justify-center">
            <SimpleGrid
                listKey={""}
                data={[1,2,3,4,5,6]}
                itemDimension={70}
                renderItem={({ item }) => (
                <View className="items-center">
                    <Image source={require("../assets/icon.png")} style={{width: 40, height: 40}} />
                    <Text className="text-xs text-slate-500">{item}</Text>
                </View>
            )}
            />
            </View>
        </>
    )
}