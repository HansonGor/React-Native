/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect, useCallback} from 'react';
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
  HanImageBackground,
  HanExample1,
  HanInputText,
  HanButton,
  HanTouchableOpactity,
  HanStatusBar,
  HanSwitch,
  HanSwiper,
  HanRefresh,
} from './components';

import {refreshData} from './data';

const App: () => React$Node = () => {
  const str1 = 'Hello React Native';
  const [refreshLoading, setRefreshLoading] = useState(true);
  const [dataList, setDataList] = useState([]);
  const getData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        const newDataList = [...refreshData, ...dataList];
        setDataList(newDataList);
        resolve();
      }, 2000);
    });
  };
  const onRefresh = () => {
    setRefreshLoading(true);
    getData().then(() => setRefreshLoading(false));
  };
  const expensiveDataList = useCallback(() => {
    return dataList;
  }, [dataList]);
  useEffect(() => {
    getData().then(() => setRefreshLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          <HanRefresh _dataList={expensiveDataList} />
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
