import React from 'react';
import {Image} from 'react-native';

import Home from '../pages/Home';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '主页',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../images/home2.png')} />
            ) : (
              <Image source={require('../images/home.png')} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
