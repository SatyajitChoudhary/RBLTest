import {StyleSheet, Text, View, Image} from 'react-native';
import {QuickActionsCards} from '../utils/QuickActions';
import React from 'react';
import {useMemo} from 'react';

const QuickActions = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        height: 130,
        // width: '100%',
        justifyContent: 'center',
        flex: 1,
      }}>
      {QuickActionsCards.map((elem, index) => {
        return (
          <Action
            key={elem.title}
            icons={elem.icons}
            title={elem.title}
            index={index}
          />
        );
      })}
    </View>
  );
};

function Action({icons, title, index}) {
  let midIndex = useMemo(() => index % 2 === 1, []);
  return (
    <View
      style={{
        flexDirection: 'column',
        borderRadius: 15,
        height: 130,
        width: '30%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.8,
        borderRadius: 10,
        transform: [{scale: midIndex ? 1.19 : 1}],
        zIndex: midIndex ? 3 : 1,
        backgroundColor: midIndex ? '#ffffff' : '#efefef',
      }}>
      <Image style={{width: 50, height: 50}} source={icons} />
      <Text>{title}</Text>
    </View>
  );
}

export default QuickActions;

const styles = StyleSheet.create({});
