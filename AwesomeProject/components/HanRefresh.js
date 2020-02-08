import React, {useState, useEffect} from 'react';

import {refreshData} from '../data';

import {View, Text, Dimensions, StyleSheet} from 'react-native';

const HanRefresh = ({isRefresh, setRefresh}) => {
  const [dataList, setDataList] = useState([]);
  const getData = () => {
    if (!isRefresh) {
      return false;
    }
    setTimeout(() => {
      const newDataList = [...dataList, ...refreshData];
      setRefresh(false);
      setDataList(newDataList);
    }, 2000);
  };
  useEffect(() => {
    console.log('刷新中啊。。。');
    getData();
  });
  return (
    <>
      <View style={styles.hanHandbagBox}>
        {dataList.map((item, i) => {
          return (
            <View style={styles.box} key={i}>
              <Text style={styles.text}>{i + 1}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: Dimensions.get('window').width,
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  text: {
    alignSelf: 'center',
  },
});

export default HanRefresh;
