import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,Dimensions
} from 'react-native';
import React from 'react';
import {ReminderTasks} from '../utils/ReminderTasks';
import {SlidingDot} from 'react-native-animated-pagination-dots';


const Reminders = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex:1,justifyContent:'space-evenly'}}>
      <Text
        style={{
          marginTop: 5,
          fontSize: 20,
          padding: 10,
          textAlign: 'left',
        }}>
        Payments & Reminders
      </Text>
      <ScrollView
        style={{flexDirection: 'row',marginHorizontal:5}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        {ReminderTasks.map(reminder => {
          return <ReminderCards key={reminder.title} reminder={reminder} />;
        })}
      </ScrollView>
      <SlidingDot
        data={ReminderTasks}
        expandingDotWidth={40}
        activeDotColor={'black'}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={{
          width: 10,
          height: 10,
          backgroundColor: '#3a3a3a',
          borderRadius: 5,
        }}
        containerStyle={{
          position:'relative',
          bottom: 0,
          flex:1,
          marginVertical:15,
          alignItems:'center'
        }}
      />
    </View>
  );
};

const ReminderCards = ({reminder}) => {
  const {icons, title, price, payableCrossed, payableTime} = reminder;
  const { width } = Dimensions.get('screen');
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 120,
        width: width*0.96,
        color: 'white',
        alignContent: 'stretch',
        padding: 5,
        borderWidth: 1,
        marginHorizontal: 3,
        borderRadius:15,
        borderColor:'#3f3f3f'
      }}>
      <Image
        style={{width: "25%", height: 50, padding: 25, alignSelf: 'center'}}
        source={icons}
      />
      <View
        style={{
          flexDirection: 'column',
          height: '90%',
          width: "70%",
          color: 'white',
          justifyContent: 'center',
          alignContent: 'center',
          paddingLeft: 20
        }}>
        <Text style={{textAlign: 'right', fontSize: 11, color: 'blue'}}>
          Remove
        </Text>
        <Text style={{fontSize: 15}}>{title}</Text>
        <Text style={{color: 'blue', fontSize: 17}}>Rs. {price}</Text>
        <Text style={{color: 'blue', fontSize: 11}}>Pay Now</Text>
        <Text style={{fontSize: 11}}>
          {payableCrossed
            ? `Payable after ${payableTime} days`
            : `Pay within ${payableTime} days`}
        </Text>
      </View>
    </View>
  );
};

export default Reminders;

const styles = StyleSheet.create({});
