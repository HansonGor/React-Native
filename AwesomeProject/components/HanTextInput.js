import React, {useState} from 'react';

import {View, Text, TextInput, StyleSheet} from 'react-native';

const HanTextInput = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <View>
        {/* 获取输入内容 */}
        <Text>{inputValue}</Text>
        {/* IOS才拥有clearButtonMode */}
        <TextInput
          style={styles.hanTextInput}
          clearButtonMode="always"
          keyboardType="number-pad"
          placeholder="请输入。。。"
          placeholderTextColor="blue"
          multiline={true}
          onChangeText={text => {
            setInputValue(text);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  hanTextInput: {
    borderColor: 'black',
    borderWidth: 3,
    height: 40,
  },
});

export default HanTextInput;
