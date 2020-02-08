import React from 'react'

import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
} from 'react-native'

const HanImageBackground = () => {
    return (
        <>
            <View>
                <ImageBackground
                    source={require('../images/Text1.png')}
                    style={styles.hanImageBox}>
                    <Text>123dasdasddasdasd</Text>
                </ImageBackground>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    hanImageBox: {
        width: 411,
        height: 200,
    },
})

export default HanImageBackground