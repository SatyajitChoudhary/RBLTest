import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {MenuIcons} from '../utils/MenuIcons';

function MenuView() {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={{position:'absolute',top:0,width:'100%',height:400,zIndex:10,overflow:'hidden'}}>
      <Menus expanded={expanded} />
      <View style={{backgroundColor: 'white', position: 'relative'}}>
        <View
          style={{
            backgroundColor: 'red',
            borderBottomEndRadius:500,
            borderBottomStartRadius:500,
            height: 40,
            width: '100%',
            padding:5
          }}>
          <Pressable style={{}}
            onPress={() => {
              setExpanded(prevExpanded => !prevExpanded);
            }}>
            <Text style={{textAlign: 'center'}}>
              {expanded ? 'Open' : 'Close'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const Menus = ({expanded}) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        flexDirection: 'row',
        height: expanded ? 320 : 160,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        flexWrap: 'wrap',
      }}>
      {MenuIcons.map((menu,ind) => {
          if((!expanded && ind<8)||(expanded))
            return <Icons key={menu.title} icons={menu.icons} title={menu.title} />;
      })}
    </View>
  );
};

const Icons = React.memo(({icons, title}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: 80,
        width: 90,
        color: 'white',
        margin: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 2,
      }}>
      <Text style={{textAlign: 'center', color: 'white'}}>Icon</Text>
      <Text style={{textAlign: 'center', color: 'white'}}>{title}</Text>
    </View>
  );
});

export default MenuView;
