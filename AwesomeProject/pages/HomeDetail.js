import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';

const HomeDetail = ({navigation}) => {
  return (
    <>
      <View style={styles.containner}>
        <Text>HomeDetail</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containner: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeDetail;
