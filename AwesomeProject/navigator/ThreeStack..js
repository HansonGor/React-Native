import React from 'react';

import {Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Three from '../pages/Three';

const Stack = createStackNavigator();

const ThreeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Three"
        component={Three}
        options={{
          headerTitle: <Text>个人</Text>,
          headerTitleAlign: 'center',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a right button!')}
              title="扫一扫"
              color="cyan"
            />
          ),
          headerLeft: () => (
            <Button
              onPress={() => navigation.goBack()}
              title="返回"
              color="cyan"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ThreeStack;
