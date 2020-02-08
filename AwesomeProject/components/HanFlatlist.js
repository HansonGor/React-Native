import React from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import handbagData from '../data/handbagData';

const HanFlatlist = () => {
  return (
    <>
      <View>
        <FlatList
          ListEmptyComponent={<Text>列表加载中</Text>}
          ListHeaderComponent={<Text>头部组件</Text>}
          ListFooterComponent={<Text>尾部组件</Text>}
          keyExtractor={(item, index) => item + index}
          data={handbagData}
          renderItem={({item}) => (
            <View style={styles.handBox}>
              <Image source={item.icon} style={styles.handbagImg} />
              <Text style={styles.handbagText}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  handBox: {
    width: Dimensions.get('window').width,
    height: 99,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  handbagImg: {
    width: 80,
    height: 80,
    left: 20,
    position: 'absolute',
  },
  handbagText: {
    alignSelf: 'center',
  },
});

export default HanFlatlist;
