import React, { useState } from 'react'

import {
    Switch
} from 'react-native'

const HanSwitch = () => {
    let [swtichValue, setSwitchValue] = useState(true)
    return (
        <>
            <Switch style={{ marginTop: 20, alignSelf: 'center' }}
                disabled={false}
                trackColor={{ false: 'yellow', true: 'green' }} // 关闭与开启按钮的颜色
                value={swtichValue}
                onValueChange={value => {
                    setSwitchValue(value)
                }}
                testID={'swtich'} // 视图ID
                thumbColor={'black'} // 按钮颜色
            />
        </>
    )
}


export default HanSwitch