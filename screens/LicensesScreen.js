import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'

import licenses from '../data/licenses';

export default function LicensesScreen({ navigation }) {
  const item = ({ item }) => {
    const { name, licenses, repository, publisher } = item;

    return (
      <ListItem
        title={`${name} (${licenses})`}
        subtitle={repository}
        key={name}
        onPress={() => navigation.navigate('LicenseDetails', { name, licenses, repository, publisher })}
      />
    );
  };

  const list = Object.entries(licenses).map((n) => (
    {
      name: n[0],
      repository: n[1]['repository'],
      licenses: n[1]['licenses'],
      publisher: n[1]['publisher']
    })
  );

  return (
    <View>
      <FlatList
        data={list}
        renderItem={item}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

LicensesScreen.navigationOptions = { title: '謝辞' };
