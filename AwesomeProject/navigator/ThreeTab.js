import React from 'react';
import {Image} from 'react-native';

import Three from '../pages/Three';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const ThreeTab = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Three}
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

export default ThreeTab;
