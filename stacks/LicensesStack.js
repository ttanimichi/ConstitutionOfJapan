import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LicensesScreen from '../screens/LicensesScreen';
import LicenseDetailsScreen from '../screens/LicenseDetailsScreen';

const LicensesStack = createStackNavigator({
  Licenses: {
    screen: LicensesScreen,
    navigationOptions: () => ({ headerBackTitle: '謝辞' })
  },
  LicenseDetails: LicenseDetailsScreen
});

export default LicensesStack;
