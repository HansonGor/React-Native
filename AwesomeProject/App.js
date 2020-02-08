/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  RefreshControl,
} from 'react-native';

import {
  HanView,
  HanText,
  HanImages,
  HanExample1,
  HanInputText,
  HanButton,
  HanTouchableOpactity,
  HanStatusBar,
  HanSwitch,
  HanSwiper,
  HanRefresh,
} from './components';

import HanImageBackground from './components/HanImageBackground';

const App: () => React$Node = () => {
  const str1 = 'Hello React Native';
  const [refreshLoading, setRefreshLoading] = useState(true);
  const onRefresh = () => {
    setRefreshLoading(true);
  };
  return (
    <>
      <HanStatusBar />
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshLoading} onRefresh={onRefresh} />
          }>
          <View>
            <Text style={styles.hanTitle}>{str1}</Text>
          </View>
          <HanRefresh
            isRefresh={refreshLoading}
            setRefresh={setRefreshLoading}
          />
          <HanSwiper />
          <HanSwitch />
          <HanView />
          <HanText />
          <HanImages />
          <HanImageBackground />
          <HanExample1 />
          <HanInputText />
          <View style={{alignItems: 'center'}}>
            <HanButton />
            <HanTouchableOpactity />
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
  hanTitle: {
    textAlign: 'center',
    color: 'red',
    fontSize: 50,
  },
});

export default App;
