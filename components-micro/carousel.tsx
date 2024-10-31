import * as React from 'react';
import { Dimensions, Image, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export const ImageCarousel = ({ images }: { images: string[] }) => {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width / 1.2}
        height={width / 2}
        autoPlay
        data={images}
        scrollAnimationDuration={2000}
        renderItem={({ index, item }) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
          </View>
        )}
        // onSnapToItem={(index) => console.log('current index:', index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
