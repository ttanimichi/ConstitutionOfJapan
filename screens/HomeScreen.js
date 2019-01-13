import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'

import sections from '../data/sections';

export default function HomeScreen({ navigation }) {
  const item = ({ item }) => (
    <ListItem
      title={item}
      key={item}
      onPress={() => navigation.navigate('Details', { key: item })}
    />
  );

  const sectionHeader = ({ section }) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  );

  return (
    <View>
      <SectionList
        renderItem={item}
        renderSectionHeader={sectionHeader}
        sections={sections}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    backgroundColor: '#efefef',
  },
  sectionTitle: {
    color: 'black',
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 24,
    opacity: 0.8,
  },
});
