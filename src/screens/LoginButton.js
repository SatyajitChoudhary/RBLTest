import React from 'react'
import { View, Text, Pressable } from 'react-native'

const LoginButton = () => {
    return (
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",margin:15,marginTop:210}}>
            <Pressable style={{backgroundColor:"blue",borderRadius:40}}>
                <Text style={{textAlign:"center",color:"white",fontSize:20,width:250,height:40,padding:5}}>Login to MoBank</Text>
            </Pressable>
        </View>
    )
}

export default LoginButton
