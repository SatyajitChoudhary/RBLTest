import React from 'react';
import {View, Text, Pressable, KeyboardAvoidingView} from 'react-native';
import {Dimensions} from 'react-native';

const LoginButton = () => {
  const {height: windowHeight, width: windowWidth} = Dimensions.get('window');

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: (windowHeight + windowWidth) * 0.28,
      }}>
      <Pressable
        style={{backgroundColor: 'blue', borderRadius: 40, margin: 20}}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
            width: 260,
            height: 40,
            padding: 5,
          }}>
          Login to MoBank
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginButton;
