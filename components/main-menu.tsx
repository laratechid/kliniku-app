import React from 'react';
import { View, Text, Image } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';

import { mainMenu } from '~/static/menu';

export const MainMenu = () => {
  return (
    <>
      <View className="justify-center m-3">
        <SimpleGrid
          listKey=""
          data={mainMenu}
          itemDimension={60}
          renderItem={({ item }) => (
            <View className="items-center">
              <Image source={require('../assets/favicon.png')} style={{ width: 30, height: 30 }} />
              <Text className="text-xs text-slate-500">{item}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};
