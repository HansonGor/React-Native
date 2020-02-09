import React from 'react';

import {Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Two from '../pages/Two';

const Stack = createStackNavigator();

const TwoStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Two"
        component={Two}
        options={{
          headerTitle: <Text>其他</Text>,
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

export default TwoStack;
