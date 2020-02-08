import React from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

const HanImages = () => {
    return (
        <>
            <Image
                source={require('../images/Text1.png')}
                style={[styles.hanImage, styles.image2]}
            />
            <Text>{'\n'}</Text>
            <View>
                <Image
                    source={{
                        // 也可以是Base64图片
                        uri:
                            'https://timgsa.baidu.com/timg?hanmage&quality=80&size=b9999_10000&sec=1580642169732&di=1a2a6867701c2d23849dd19a7ad513d3&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F23%2F31%2F57%2F591be2a6807c3.png',
                    }}
                    style={[styles.hanImage, styles.hanImage1]}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    hanImage: {
        width: 411,
        height: 200,
        resizeMode: 'contain',
        backgroundColor: 'blue',
    },
    hanImage1: {
        resizeMode: 'cover',
    },
    hanImage2: {
        resizeMode: 'contain',
        width: 400,
        height: 400,
    },
})

export default HanImages