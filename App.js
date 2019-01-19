import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeStack from './stacks/HomeStack';
import LicensesStack from './stacks/LicensesStack';
import FullText from './screens/FullText';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
        title: '条項',
      }),
    },
    FullText: {
      screen: FullText,
      navigationOptions: () => ({
        title: '全文',
      }),
    },
    Licenses: {
      screen: LicensesStack,
      navigationOptions: () => ({
        title: '謝辞',
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
