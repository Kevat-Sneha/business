import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from '../../app-example/constants/Colors'

export default function TabLayout() {
  return (
  <Tabs screenOptions={{ 
    headershown:false,
    tabBarActiveTintColor:Colors.PRIMARY }}>
    <Tabs.Screen name='Home'
    options={{
      tabBarLabel:'Home',
      tabBarIcon:({color})=><FontAwesome name="home"
       size={24} color={color} />
    }}/>
     <Tabs.Screen name='explore'
      options={{
      tabBarLabel:'Explore',
      tabBarIcon:({color})=><FontAwesome name="search"
       size={24} color={color} />
    }}/>
      <Tabs.Screen name='profile' options={{
      tabBarLabel:'Profile',
      tabBarIcon:({color})=><Ionicons name="people-circle-sharp" 
      size={24} color={color} />
 
    }}/>
  </Tabs>
  )
}

// import { View, Text } from 'react-native';
// import React from 'react';
// import { Tabs } from 'expo-router';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { Colors } from '../../app-example/constants/Colors';
// import LoginScreen from '../../app-example/components/LoginScreen';

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: Colors.PRIMARY,
//       }}
//     >
//       <Tabs.Screen
//         name="Home"
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           tabBarLabel: 'Explore',
//           tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color }) => <Ionicons name="people-circle-sharp" size={24} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="login" // must match folder name or route
//         options={{
//           tabBarLabel: 'Login',
//           tabBarIcon: ({ color }) => <Ionicons name="log-in" size={24} color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }
