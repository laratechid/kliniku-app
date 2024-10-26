import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <Text>{name}</Text>
    </>
  );
}
