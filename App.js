import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from 'react-native';


import SplashScreen from './App/screens/SplashScreen';
import LogIn from './App/screens/LogIn';
import SignUp from './App/screens/SignUp';
import CustomerShops from './App/screens/CustomerShops';
import CustomerIndivShops from './App/screens/CustomerIndivShops';
import CustomerRewards from './App/screens/CustomerRewards';
import CustomerIndivRewards from './App/screens/CustomerIndivRewards';
import CustomerShopItem from './App/screens/CustomerShopItem';
import CustomerRewardItem from './App/screens/CustomerRewardItem';
import CustomerIndivShopItems from './App/screens/CustomerIndivShopItems';
import CustomerIndivRewardItems from './App/screens/CustomerIndivRewardItems';
import CustomerCart from './App/screens/CustomerCart';
import CustomerIndivCart from './App/screens/CustomerIndivCart';
import CustomerProdQRCode from './App/screens/CustomerProdQRCode';
import CustomerRewQRCode from './App/screens/CustomerRewQRCode';
import CustomerProfile from './App/screens/CustomerProfile';
import ClientHome from './App/screens/ClientHome';
import MyProducts from './App/screens/MyProducts';
import MyRewards from './App/screens/MyRewards';
import MyIndivProducts from './App/screens/MyIndivProducts';
import MyIndivRewards from './App/screens/MyIndivRewards';
import ClientAddProduct from './App/screens/ClientAddProduct';
import ClientEditProduct from './App/screens/ClientEditProduct';
import ClientAddReward from './App/screens/ClientAddReward';
import ClientEditReward from './App/screens/ClientEditReward';
import MySuki from './App/screens/MySuki';
import MyIndivSuki from './App/screens/MyIndivSuki';
import ClientProfile from './App/screens/ClientProfile';
import AboutUs from './App/screens/AboutUs';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const customerBottomTabs = () =>{
  return (
    <Tabs.Navigator 
      backBehavior={"none"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if(route.name === 'STORES'){
            iconName = focused
            ? require('./App/assets/Shop-B.png')
            : require('./App/assets/Shop-B.png');
          }
          else if(route.name === 'REWARDS'){
            iconName = focused
            ? require('./App/assets/Rewards-B.png')
            : require('./App/assets/Rewards-B.png');
          }
          else if(route.name === 'PROFILE'){
            iconName = focused
            ? require('./App/assets/User-B.png')
            : require('./App/assets/User-B.png');
          }
          else if(route.name === 'ABOUT US'){
            iconName = focused
            ? require('./App/assets/About-B.png')
            : require('./App/assets/About-B.png');
          }
            

          return (
            <Image source={iconName} style={{width:45, height:45}} resizeMode="contain"/>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'black'
      }}
    >
      <Tabs.Screen name="STORES" component={CustomerShops} />        
      <Tabs.Screen name="REWARDS" component={CustomerRewards} />    
      <Tabs.Screen name="PROFILE" component={CustomerProfile} />    
      <Tabs.Screen name="ABOUT US" component={AboutUs} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="login" component={LogIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="clientHome" component={ClientHome} />
        <Stack.Screen name="clientAddProduct" component={ClientAddProduct} />
        <Stack.Screen name="clientAddReward" component={ClientAddReward} />
        <Stack.Screen name="clientEditProduct" component={ClientEditProduct} />
        <Stack.Screen name="clientEditReward" component={ClientEditReward} />
        <Stack.Screen name="myProducts" component={MyProducts} />
        <Stack.Screen name="myRewards" component={MyRewards} />
        <Stack.Screen name="clientProfile" component={ClientProfile} />
        <Stack.Screen name="mySuki" component={MySuki} />
        <Stack.Screen name="customerShops" children={customerBottomTabs} />  
        <Stack.Screen name="customerShopItem" component={CustomerShopItem} />
        <Stack.Screen name="CustomerCart" component={CustomerCart} />
        <Stack.Screen name="customerRewardItem" component={CustomerRewardItem} />
        <Stack.Screen name="customerProdQRCode" component={CustomerProdQRCode} />
        <Stack.Screen name="customerRewQRCode" component={CustomerRewQRCode} />
      </Stack.Navigator>      
    </NavigationContainer>
  )};
