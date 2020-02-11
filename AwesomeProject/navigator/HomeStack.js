import React from 'react';

import {Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import HomeDetail from '../pages/HomeDetail';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => {
        console.log(route);
        return {tabBarVisible: false};
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          headerTitle: <Text style={{alignSelf: 'center'}}>主页</Text>,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a right button!')}
              title="扫一扫"
              color="cyan"
            />
          ),
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate('HomeDetail')}
              title="详情"
              color="cyan"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
