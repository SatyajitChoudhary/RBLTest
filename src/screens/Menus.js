import React, {useState} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {MenuIcons} from '../utils/MenuIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

function MenuView() {
  const [expanded, setExpanded] = useState(false);
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 500,
        zIndex: 10,
        overflow: 'hidden',
      }}>
      <Header />
      <Menus expanded={expanded} />
      <View style={{backgroundColor: '#ffffff', position: 'relative'}}>
        <View
          style={{
            backgroundColor: '#700000',
            borderBottomEndRadius: 500,
            borderBottomStartRadius: 500,
            height: 40,
            width: '100%',
            padding: 5,
          }}>
          <Pressable
            style={{alignItems: 'center'}}
            onPress={() => {
              setExpanded(prevExpanded => !prevExpanded);
            }}>
            <Feather
              name={expanded ? 'chevrons-up' : 'chevrons-down'}
              color="white"
              size={30}
            />
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
        backgroundColor: '#700000',
        flexDirection: 'row',
        height: expanded ? 320 : 160,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexWrap: 'wrap',
      }}>
      {MenuIcons.map((menu, ind) => {
        if ((!expanded && ind < 8) || expanded)
          return (
            <Icons key={menu.title} icons={menu.icons} title={menu.title} />
          );
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
        alignItems: 'center',
        padding: 2,
      }}>
      <MaterialCommunityIcons name={icons} color="white" size={30} />
      <Text style={{textAlign: 'center', color: 'white'}}>{title}</Text>
    </View>
  );
});



function Header() {
  return (
    <View style={{height:60,width:"100%",backgroundColor:"#700000",color:"#ffffff",flexDirection:'row',alignItems:'center',padding:20,paddingTop:10}}>
       <Image style={{width: 28, height: 35,marginRight:10,alignSelf:'center'}} source={require('../assets/rbl-logo.png')} />
      <View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
      <Text style={{color:'#ffffff',fontSize:15,fontWeight:'bold'}}>RBLBANK</Text>
      <Text style={{color:'#ffffff',fontSize:10,fontWeight:'bold',alignSelf:'flex-end',fontStyle:'italic'}}>apno ka bank</Text>
      </View>
    </View>
  )
}


export default MenuView;
