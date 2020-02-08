import React from 'react';

import {View, StyleSheet} from 'react-native';

const HanView = () => {
  return (
    <>
      <View style={styles.HanView}>
        <View style={{width: 50, height: 100, backgroundColor: 'blue'}} />
        <View style={{width: 60, height: 100, backgroundColor: 'orange'}} />
        <View style={{width: 70, height: 100, backgroundColor: 'red'}} />
        <View style={{width: 80, height: 100, backgroundColor: 'purple'}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  HanView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
  },
});

export default HanView;
