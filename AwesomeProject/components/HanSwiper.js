import React from 'react';

import {View, Image, StyleSheet, Dimensions} from 'react-native';

import Swiper from 'react-native-swiper';

import {opData} from '../data';

const HanSwiper = () => {
  return (
    <>
      <View>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          autoplay={true}
          loop={true}>
          {opData.map((imgItem, i) => {
            return <Image source={imgItem} style={styles.hanImage} key={i} />;
          })}
        </Swiper>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 600,
  },
  hanImage: {
    width: Dimensions.get('window').width,
    height: 600,
    alignItems: 'center',
  },
});

export default HanSwiper;
