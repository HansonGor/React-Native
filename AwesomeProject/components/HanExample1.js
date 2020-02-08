import React from 'react';

import {handbagData} from '../data';

import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

const HanExample1 = () => {
  return (
    <>
      <View style={styles.hanHandbagBox}>
        {handbagData.map(item => {
          return (
            <View style={styles.hanHandbagItem} key={item.name}>
              <Image source={item.icon} style={styles.hanHandbagIcon} />
              <Text style={styles.hanHandbagName}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  hanHandbagBox: {
    width: Dimensions.get('window').width,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  hanHandbagItem: {
    width: Dimensions.get('window').width / 3 - 20,
    height: 200,
    marginTop: 15,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hanHandbagIcon: {
    width: 50,
    height: 50,
  },
  hanHandbagName: {
    marginTop: 15,
    fontSize: 20,
    color: '#ffffff',
  },
});

export default HanExample1;
