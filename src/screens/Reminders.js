import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { ReminderTasks } from '../utils/ReminderTasks'


// const ScrollledReminders = ()=>{
//     const [dataSource, setDatasource] = useState(ReminderTasks)
//     const [scrollX, setscrollX] = useState(new Animated.Value(0))
//     return(
//         <View style={{  justifyContent: 'center', alignItems: 'center' }}>
//     <View
//       style={{ width:"100%", height: 150 }}
//       >
//       <ScrollView
//         horizontal={true}
//         pagingEnabled={true}
//         showsHorizontalScrollIndicator={false}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } },{useNativeDriver: false}]
//         )} 
//         scrollEventThrottle={16}
//         >
//         {dataSource.map((source, i) => { 
//           return ( 
//             (<ReminderCards key={source.title} reminder={source}/>)
//           );
//         })}
//       </ScrollView>
//     </View>
//     <View
//       style={{ flexDirection: 'row' }}
//       >
//       {dataSource.map((_, i) => { 
//         let opacity = Animated.interpolate({
//           inputRange: [i - 1, i, i + 1],
//           outputRange: [0.3, 1, 0.3],
//           extrapolate: 'clamp' 
//         });
//         return (
//           <Animated.View
//             key={i}
//             style={{ opacity, height: 5, width: 5, backgroundColor: '#595959', margin: 2, borderRadius: 5 }}
//           />
//         );
//       })}
//     </View>
//   </View>
//     )
// }

const Reminders = () => {
    return (
        <View>
            <Text style={{fontSize:20,padding:10,textAlign:'left',margin:5,justifyContent:'space-evenly'}}>Payments & Reminders</Text>
            <ScrollView style={{flexDirection:'row'}} scrollEnabled horizontal showsHorizontalScrollIndicator={false}>
            {
                ReminderTasks.map((reminder)=>{
                    return(<ReminderCards key={reminder.title} reminder={reminder}/>)
                })
            }
        </ScrollView>
        </View>
    )
}

const ReminderCards = React.memo(({reminder}) => {
    const {icons,
    title,
    price,
    payableCrossed,
    payableTime} = reminder
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 120,
          width: 200,
          color: 'white',
          alignContent: 'stretch',
          padding: 2,
          borderWidth:1,
          marginHorizontal:10,
          marginVertical:1
        }}>
        <Text style={{textAlign: 'center', color: 'white',padding:2}}>Icon</Text>
        <View style={{
          flexDirection: 'column',
          height: "100%",
          width: 140,
          color: 'white',
          justifyContent: 'center',
          alignContent: 'stretch',
          padding: 2,
        }}>
            <Text style={{textAlign:'right',fontSize:11,color:'blue'}}>Remove</Text>
            <Text style={{ fontSize:15}}>{title}</Text>
            <Text style={{ color: 'blue',fontSize:17}}>Rs. {price}</Text>
            <Text style={{ color: 'blue',fontSize:11}}>Pay Now</Text>
            <Text style={{ fontSize:11}}>{payableCrossed?`Payable after ${payableTime} days`:`Pay within ${payableTime} days`}</Text>
        </View>
      </View>
    );
  });

export default Reminders

const styles = StyleSheet.create({})
