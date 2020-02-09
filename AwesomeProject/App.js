/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Button, Image} from 'react-native';

import Home from './pages/Home';
import Two from './pages/Two';
import Three from './pages/Three';

import HomeStack from './navigator/HomeStack';
import TwoStack from './navigator/TwoStack';
import ThreeStack from './navigator/ThreeStack.';

import Navigator from './navigator';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen
    //       name="Home"
    //       component={HomeStack}
    //       options={{
    //         tabBarLabel: '主页',
    //         tabBarIcon: ({focused}) =>
    //           focused ? (
    //             <Image source={require('./images/home2.png')} />
    //           ) : (
    //             <Image source={require('./images/home.png')} />
    //           ),
    //         setOp,,
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Two"
    //       component={TwoStack}
    //       options={{
    //         tabBarLabel: '其它',
    //         tabBarIcon: ({focused}) =>
    //           focused ? (
    //             <Image source={require('./images/auto2.png')} />
    //           ) : (
    //             <Image source={require('./images/auto.png')} />
    //           ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Three"
    //       component={ThreeStack}
    //       options={{
    //         tabBarLabel: '个人',
    //         tabBarIcon: ({focused}) =>
    //           focused ? (
    //             <Image source={require('./images/personal2.png')} />
    //           ) : (
    //             <Image source={require('./images/personal.png')} />
    //           ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Two">
    //       <Stack.Screen name="Home" component={Home} />
    //       <Stack.Screen
    //         name="Two"
    //         component={Two}
    //         options={{
    //           headerTitle: <Text>Twos</Text>,
    //           headerRight: () => (
    //             <Button
    //               onPress={() => alert('This is a right button!')}
    //               title="左边"
    //               color="cyan"
    //             />
    //           ),
    //           headerLeft: () => (
    //             <Button
    //               onPress={() => alert('This is a left button!')}
    //               title="右边"
    //               color="cyan"
    //             />
    //           ),
    //         }}
    //       />
    //       <Stack.Screen name="Three" component={Three} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
  );
};

export default App;
