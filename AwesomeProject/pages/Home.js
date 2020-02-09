import React, {useState, useEffect, useCallback} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  RefreshControl,
  Button,
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
  HanFlatlist,
  HanSectionlist,
} from '../components';

import {refreshData} from '../data';

const Home = ({navigation}) => {
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
          <HanSwiper />
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button
            title="Go Two"
            onPress={(() => navigation.push('Two'), {post: 'two'})}
          />
          <Button
            title="Go Three"
            onPress={(() => navigation.push('Three'), {post: 'Three'})}
          />
          <Button
            title="Go Home"
            onPress={(() => navigation.push('Home'), {post: 'Home'})}
          />
          <Button
            title="跳转到Two"
            onPress={() => {
              navigation.navigate('Two', {post: 'two'});
            }}
          />
          <Button
            title="跳转到Three"
            onPress={() => {
              navigation.navigate('Three', {post: 'Three'});
            }}
          />
          <HanRefresh _dataList={expensiveDataList} />
          {/* <HanFlatlist /> */}
          {/* <HanSectionlist /> */}
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

export default Home;
