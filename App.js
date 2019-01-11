import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeStack from './stacks/HomeStack';
import TemporaryScreen from './screens/TemporaryScreen';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
        title: '条項',
      }),
    },
    Favorites: {
      screen: TemporaryScreen,
      navigationOptions: () => ({
        title: 'お気に入り',
      }),
    },
    History: {
      screen: TemporaryScreen,
      navigationOptions: () => ({
        title: '履歴',
      }),
    },
    Settings: {
      screen: TemporaryScreen,
      navigationOptions: () => ({
        title: '設定',
      }),
    }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 16,
      }
    }
  }
);

export default createAppContainer(BottomTabNavigator);
