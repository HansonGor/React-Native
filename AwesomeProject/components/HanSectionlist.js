import React from 'react';

import {
  View,
  Text,
  SectionList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import handbagData from '../data/handbagData';

const HanSectionlist = () => {
  return (
    <>
      <View>
        <SectionList
          sections={[
            {title: 'Title1', data: handbagData},
            {title: 'Title2', data: handbagData},
            {title: 'Title3', data: handbagData},
          ]}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index, section}) => (
            <View style={styles.handBox}>
              <Image source={item.icon} style={styles.handbagImg} />
              <Text style={styles.handbagText}>{item.name}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
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

export default HanSectionlist;
