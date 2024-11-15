import * as React from 'react';
import { Dimensions, Image, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export const ImageCarousel = ({ images }: { images: string[] }) => {
  const { width } = Dimensions.get('window');

  return (
    <View className='items-center'>
      <Carousel
        loop
        width={width / 1.2}
        height={width /2}
        autoPlay
        data={images}
        scrollAnimationDuration={2000}
        renderItem={({ index, item }) => (
          <View key={index} >
            <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
