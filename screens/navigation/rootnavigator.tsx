import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../container/Login';
import PropertyCard from '../components/PropertyCard';
import SearchForm from '../container/Search';
import RegisterModal from '../components/loginpages/Registration';
import OtpScreen from '../components/loginpages/Otpview';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Settings':
                iconName = focused ? 'settings' : 'settings-outline';
                break;
              default:
                break;
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Login} />
        <Tab.Screen name="Settings" component={PropertyCard} />
      </Tab.Navigator>
    );
  }
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="otpscreen" component={SearchForm} options={{headerShown:false}}/>
  <Stack.Screen name='search' component={PropertyCard} options={{headerShown:false}}/>
  <Stack.Screen name="registraion" component={RegisterModal} options={{headerShown:false}}/>
       
        
        <Stack.Screen name="cards" component={PropertyCard}/>
       

      </Stack.Navigator>
    );
  }
    return (
        
      <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    )
}

export default RootNavigator;
