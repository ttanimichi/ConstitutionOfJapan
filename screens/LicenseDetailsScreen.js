import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LicenseDetailsScreen({ navigation }) {
  const name = navigation.getParam('name', 'No data');
  const licenses = navigation.getParam('licenses', 'No data');
  const repository = navigation.getParam('repository', 'No data');
  const publisher = navigation.getParam('publisher', 'No data');

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textBold]}>{name}</Text>
      <Text style={styles.text}>{`publisher: ${publisher || ''}`}</Text>
      <Text style={styles.text}>{`license: ${licenses}`}</Text>
      <Text style={styles.text}>{`repository: ${repository}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
  },
  text: {
    fontSize: 18,
    lineHeight: 30
  },
  textBold: {
    fontWeight: 'bold'
  }
});
