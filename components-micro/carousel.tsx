import * as React from 'react';
import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export const ImageCarousel = ({ images }: { images: string[] }) => {
    // const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={340}
                height={200}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index, item }) => (
                    <View
                        key={index}
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={{ uri: item }}
                            style={{ width: 'auto', height: 100, borderRadius: 10 }}
                            resizeMode="contain"
                        />
                    </View>
                )}
            />
        </View>
    );
}