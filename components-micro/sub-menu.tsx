import React from "react"
import { ImageBackground, View, Text, Dimensions } from "react-native"
import { SimpleGrid } from "react-native-super-grid"

interface Poly {
    id: number
    name: string
    image: string
}

interface Polyclinics {
    id: number
    poly: Poly
}

export const CardImages = ({ data }: { data: Polyclinics[] }) => {
  const { width } = Dimensions.get('window');
  return (
    <SimpleGrid
      data={data}
      listKey=""
      spacing={15}
      renderItem={({ item }) => (
        <ImageBackground
          className={`h-20 w-[${width / 2}] bg-gray-200 rounded-xl rounded-lg overflow-hidden`}
          source={{ uri: item.poly.image }} resizeMode="cover"
        >
          <View className="absolute top-1 p-1 px-4 right-1 bg-gray-300 rounded-full">
            <Text className="text-gray-600 text-xs">{item.poly.name}</Text>
          </View>
        </ImageBackground>
      )}
    />
  )
}