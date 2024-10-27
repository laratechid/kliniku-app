import * as React from 'react';
import { Dimensions, Image, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export const ImageCarousel = ({ images }: { images: string[] }) => {
    const { width } = Dimensions.get('window');

    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={width * 0.8} // 80% of screen width
                height={(width) / 2} // Maintain aspect ratio (width / 2)
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index, item }) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image
                            source={{ uri: item }}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
});