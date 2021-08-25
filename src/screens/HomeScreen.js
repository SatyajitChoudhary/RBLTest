import React, {useState} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import LoginButton from './LoginButton';
import Menu from './Menus';
import QuickActions from './QuickActions';
import Reminders from './Reminders';

function HomeScreen() {
  const {width, height} = Dimensions.get('screen');

  return (
    <View
      style={{backgroundColor: 'white', position: 'relative', height, width}}>
      <ScrollView>
        <View>
          <Menu />
        </View>
        <LoginButton />
        <QuickActions />
        <Reminders />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
