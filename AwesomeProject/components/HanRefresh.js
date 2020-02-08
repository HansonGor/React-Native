import React, {useState, useEffect} from 'react';

import {View, Text, Dimensions, StyleSheet} from 'react-native';

const HanRefresh = ({_dataList}) => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    setDataList(_dataList());
    console.log('刷新了啊。。。');
  }, [_dataList]);
  return (
    <>
      <View>
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
