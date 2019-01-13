import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements'
import details from '../data/details';

export default function DetailsScreen({ navigation }) {
  const key = navigation.getParam('key', 'no-key');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.text, styles.textBold]}>{key}</Text>
      </View>

      <Divider />

      <View style={styles.header}>
        <Text style={styles.text}>{details[key]}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  text: {
    fontSize: 18,
    lineHeight: 26
  },
  textBold: {
    fontWeight: 'bold'
  },
  header: {
    marginBottom: 8,
    marginTop: 24
  }
});
