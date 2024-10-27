import React from "react"
import { ImageBackground, View, Text, Dimensions } from "react-native"
import { SimpleGrid } from "react-native-super-grid"

export const CardImages = ({ titles }: { titles: string[] }) => {
  const { width } = Dimensions.get('window');
  return (
    <SimpleGrid
      data={titles}
      listKey=""
      spacing={5}
      renderItem={({ item }) => (
        <ImageBackground
          className={`h-20 w-[${width / 2}] bg-gray-200 rounded-xl rounded-lg overflow-hidden`}
          source={{ uri: "https://dummyimage.com/600x400/4f4f4e/ffffff" }} resizeMode="cover"
        >
          <View className="absolute top-1 right-1 bg-gray-300 rounded-full">
            <Text className="text-gray-600 text-xs">{item}</Text>
          </View>
        </ImageBackground>
      )}
    />
  )
}