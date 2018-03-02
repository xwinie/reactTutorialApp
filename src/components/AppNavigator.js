import React from 'react';
import { TabNavigator } from 'react-navigation';

import HomeNavigator from './HomePage'
import MineNavigator from './MinePage'

const AppNavigator = TabNavigator({
    Home: {
        screen: HomeNavigator,
    },
    Mine: {
        screen: MineNavigator,
    }
});

export default AppNavigator;