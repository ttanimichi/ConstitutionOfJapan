import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={() => navigation.navigate('Details', { id: 42 })}>
        詳細を表示
      </Text>
    </View>
  );
}
