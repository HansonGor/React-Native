import React from 'react';
import {Image} from 'react-native';

import Two from '../pages/Two';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TwoTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Two}
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
    </Tab.Navigator>
  );
};

export default TwoTab;
