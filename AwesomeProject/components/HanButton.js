import React from 'react'

import {
    View,
    Button,
} from 'react-native'

const HanButton = () => {
    const onButtonPress = () => {
        alert('onButtonPress')
    }
    return (
        <>
            <View>
                <Button title="登录" onPress={onButtonPress} color="cyan" />
            </View>
        </>
    )
} 

export default HanButton