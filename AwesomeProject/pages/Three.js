import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';

const Three = ({navigation, route}) => {
  // const {post} = route.params;
  return (
    <>
      <View style={styles.containner}>
        <Text>Three</Text>
        <Button
          title="跳转到Two"
          onPress={() => {
            navigation.navigate('Two', {post: 'two'});
          }}
        />
        <Button
          title="跳转到Home"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="Go Two" onPress={() => navigation.push('Two')} />
        <Button title="Go Three" onPress={() => navigation.push('Three')} />
        <Button title="Go Home" onPress={() => navigation.push('Home')} />
        {/* <Text>{post}</Text> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containner: {
    flex: 1,
    backgroundColor: '#58BC58',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Three;
