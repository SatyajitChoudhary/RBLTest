import React,{useState} from 'react'
import { View,Text } from 'react-native'
import LoginButton from './LoginButton'
import Menu from './Menus'
import QuickActions from './QuickActions'
import Reminders from './Reminders'

function HomeScreen() {
    const [expanded, setExpanded] = useState(false)
    return (
        <View style={{backgroundColor:"white",position:'relative'}}>
            {/* <Header /> */}
            <Menu />
            <LoginButton />
            <QuickActions />
            <Reminders />
        </View>
    )
}

export default HomeScreen
