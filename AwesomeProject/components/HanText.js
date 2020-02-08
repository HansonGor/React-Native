import React from 'react';

import {View, Text, Dimensions, Platform, StyleSheet} from 'react-native';

const HanText = () => {
  return (
    <>
      <View>
        {/* 不能直接放文字 */}
        <Text style={[styles.hanTip, styles.commonStyle]}>
          屏幕宽度是：{Dimensions.get('window').width + '\n'}
        </Text>
        <Text style={[styles.hanTip, styles.commonStyle]}>
          屏幕高度是：{Dimensions.get('window').height + '\n'}
        </Text>
        <Text style={[styles.hanTip, styles.commonStyle]}>
          屏幕分辨率是：{Dimensions.get('window').scale + '\n'}
        </Text>
        <Text style={[styles.hanTip, styles.commonStyle]}>
          操作系统是：{Platform.OS}
        </Text>
      </View>
      <View style={styles.hanBox1}>
        <Text style={styles.hanStr1} numberOfLines={3} ellipsizeMode="tail">
          对酒当歌，人生几何！对酒当歌，人生几何啊！对酒当歌，人生几何！对酒当歌，人生几何！
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  hanStr1: {
    fontSize: 25,
    lineHeight: 40,
  },
  hanBox1: {
    width: 200,
    height: 150,
    backgroundColor: 'cyan',
  },
  hanTip: {
    textAlign: 'center',
    color: 'red',
  },
  commonStyle: {
    lineHeight: 30,
  },
});

export default HanText;
