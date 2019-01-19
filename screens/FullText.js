import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from 'react-native-elements'
import fullText from '../data/fullText';

export default function FullText() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={[styles.text, styles.textBold]}>日本国憲法</Text>
          </View>

          <Divider />
          {fullText.split("\n\n").map((t, i) => <Text style={styles.text} key={i}>{`${t}\n\n`}</Text>)}
        </View>
      </ScrollView>
    </SafeAreaView>
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
    paddingTop: 24,
    paddingBottom: 8
  }
});
