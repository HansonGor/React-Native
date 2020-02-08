import React from 'react';

import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const HanTouchableOpactity = () => {
  const onButtonPress = () => {
    alert('onButtonPress');
  };
  return (
    <>
      <TouchableOpacity
        style={styles.hanBtnStyle}
        activeOpacity={0.5}
        // onPress={onButtonPress}
        // onPressIn={onButtonPress}
        // onPressOut={onButtonPress}
        onLongPress={onButtonPress}>
        <Text style={{fontSize: 25, color: 'green'}}>注册账号</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  hanBtnStyle: {
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HanTouchableOpactity;
