import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import HomeStack from './HomeStack';
import TwoStack from './TwoStack';
import ThreeStack from './ThreeStack.';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
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
      <Tab.Screen
        name="Two"
        component={TwoStack}
        options={{
          tabBarLabel: '其它',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../images/auto2.png')} />
            ) : (
              <Image source={require('../images/auto.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="Three"
        component={ThreeStack}
        options={{
          tabBarLabel: '个人',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../images/personal2.png')} />
            ) : (
              <Image source={require('../images/personal.png')} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
