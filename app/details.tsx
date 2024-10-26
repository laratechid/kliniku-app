import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';

import { Container } from '~/components/container';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
    </>
  );
}
