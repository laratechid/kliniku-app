import React from "react"
import { ImageBackground, View, Text } from "react-native"
import { SimpleGrid } from "react-native-super-grid"

export const CardImages = ({ titles }: { titles: string[] }) => {
    return(
        <>
            <SimpleGrid
              data={titles}
              listKey=""
              spacing={0}
              renderItem={({ item }) => (
                <ImageBackground
                  className="m-3 h-20 w-40 bg-gray-200 rounded-xl mx-auto rounded-lg overflow-hidden"
                  source={{ uri: "https://dummyimage.com/600x400/4f4f4e/ffffff" }} resizeMode="cover"
                >
                  <View className="absolute top-1 right-1 bg-gray-300 px-4 py-1 rounded-full">
                    <Text className="text-gray-600 text-xs">{item}</Text>
                  </View>
                </ImageBackground>
              )}
            />
        </>
    )
}