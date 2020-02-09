import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';

const Two = ({navigation}) => {
  return (
    <>
      <View style={styles.containner}>
        <Text>Two</Text>
        <Button
          title="跳转到Three"
          onPress={() => {
            navigation.navigate('Three', {post: 'Three'});
          }}
        />
        <Button
          title="跳转到Home"
          onPress={() => {
            navigation.navigate('Home', {post: 'Home'});
          }}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        {/* <Button title="Go Two" onPress={() => navigation.push('Two')} />
        <Button title="Go Three" onPress={() => navigation.push('Three')} />
        <Button title="Go Home" onPress={() => navigation.push('Home')} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containner: {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Two;
