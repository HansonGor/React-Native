/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform,
  Image,
  ImageBackground,
} from 'react-native';

const App: () => React$Node = () => {
  const str1 = 'Hello React Native';
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View>
            {/* 不能直接放文字 */}
            <Text style={styles.title}>{str1}</Text>
            <Text style={[styles.tip, styles.commonStyle]}>
              屏幕宽度是：{Dimensions.get('window').width + '\n'}
            </Text>
            <Text style={[styles.tip, styles.commonStyle]}>
              屏幕高度是：{Dimensions.get('window').height + '\n'}
            </Text>
            <Text style={[styles.tip, styles.commonStyle]}>
              屏幕分辨率是：{Dimensions.get('window').scale + '\n'}
            </Text>
            <Text style={[styles.tip, styles.commonStyle]}>
              操作系统是：{Platform.OS}
            </Text>
          </View>
          <View style={styles.flexWrapper}>
            <View style={{width: 50, height: 100, backgroundColor: 'blue'}} />
            <View style={{width: 60, height: 100, backgroundColor: 'orange'}} />
            <View style={{width: 70, height: 100, backgroundColor: 'red'}} />
            <View style={{width: 80, height: 100, backgroundColor: 'purple'}} />
          </View>
          <View style={styles.box1}>
            <Text style={styles.str1} numberOfLines={3} ellipsizeMode="tail">
              对酒当歌，人生几何！对酒当歌，人生几何啊！对酒当歌，人生几何！对酒当歌，人生几何！
            </Text>
          </View>
          <Image
            source={require('./images/Text1.png')}
            style={[styles.image, styles.image2]}
          />
          <Text>{'\n'}</Text>
          <View>
            <Image
              source={{
                // 也可以是Base64图片
                uri:
                  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580642169732&di=1a2a6867701c2d23849dd19a7ad513d3&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F23%2F31%2F57%2F591be2a6807c3.png',
              }}
              style={[styles.image, styles.image1]}
            />
          </View>
          <View>
            <ImageBackground
              source={require('./images/Text1.png')}
              style={styles.imageBox}>
              <Text>123dasdasddasdasd</Text>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  commonStyle: {
    lineHeight: 30,
  },
  imageBox: {
    width: 411,
    height: 200,
  },
  image: {
    width: 411,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: 'blue',
  },
  image1: {
    resizeMode: 'cover',
  },
  image2: {
    resizeMode: 'contain',
    width: 400,
    height: 400,
  },
  title: {
    textAlign: 'center',
    color: 'red',
    fontSize: 50,
  },
  tip: {
    textAlign: 'center',
    color: 'red',
  },
  flexWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
  },
  box1: {
    width: 200,
    height: 150,
    backgroundColor: 'cyan',
  },
  str1: {
    fontSize: 25,
    lineHeight: 40,
  },
});

export default App;
