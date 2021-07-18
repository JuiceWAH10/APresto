import React, {useState, useEffect} from 'react';
import firebase from "firebase";
import { Provider } from 'react-redux'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from 'react-native';
import FlashMessage from "react-native-flash-message";

import SplashScreen from './App/screens/SplashScreen';
import LogIn from './App/screens/LogIn';
import QRCodeScanner from './App/screens/QRCodeScanner.js';
import store from './App/screens/store.js';

// Customer Screens
import SignupCustomer from './App/screens/customer/signupCustomer';
import Explore from './App/screens/customer/explore';
import Shops from './App/screens/customer/shops';
import Profile from './App/screens/customer/profile';
import Rewards from './App/screens/customer/rewards';
import ShopItems from './App/screens/customer/shopItems/shopItems';
import RewardItems from './App/screens/customer/rewardItems/rewardItems';
import ShopItemsCart from './App/screens/customer/shopItems/shopItemsCart';
import RewardItemsCart from './App/screens/customer/rewardItems/rewardItemsCart';
import ShopItemsQR from './App/screens/customer/shopItems/shopItemsQR';
import RewardItemsQR from './App/screens/customer/rewardItems/rewardItemsQR';
import CustomerEditProfile from './App/screens/customer/profile/customerEditProfile';

// Client Screens
import ClientHomepage from './App/screens/owners/clientHomepage';
import ClientProductAdd from './App/screens/owners/clientProduct/clientProductAdd';
import ClientProductEdit from './App/screens/owners/clientProduct/clientProductEdit';
import ClientProductList from './App/screens/owners/clientProduct/clientProductList';
import ClientRewardAdd from './App/screens/owners/clientReward/clientRewardAdd';
import ClientRewardEdit from './App/screens/owners/clientReward/clientRewardEdit';
import ClientRewardList from './App/screens/owners/clientReward/clientRewardList';
import ClientSukiList from './App/screens/owners/clientSuki/clientSukiList';
import ClientEditProfile from './App/screens/owners/clientProfile/clientEditProfile';

const Stack = createStackNavigator();
//Auth Screens
const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const customerBottomTabs = () =>{
  return (
    <Tabs.Navigator 
      backBehavior={"none"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if(route.name === 'EXPLORE'){
            iconName = focused
            ? require('./App/assets/searches-active.png')
            : require('./App/assets/searches.png');
          }
          else if(route.name === 'SHOPS'){
            iconName = focused
            ? require('./App/assets/shop-active.png')
            : require('./App/assets/shop.png');
          }
          else if(route.name === 'REWARDS'){
            iconName = focused
            ? require('./App/assets/gift-active.png')
            : require('./App/assets/gift.png');
          }
          else if(route.name === 'PROFILE'){
            iconName = focused
            ? require('./App/assets/user-active.png')
            : require('./App/assets/user.png');
          }
            
          return (
            <Image source={iconName} style={{width: 30, height: 30}} resizeMode="contain"/>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ee4b43",
        inactiveTintColor: 'black'
      }}
    >
      <Tabs.Screen name="EXPLORE" component={Explore} />        
      <Tabs.Screen name="SHOPS" component={Shops} />    
      <Tabs.Screen name="REWARDS" component={Rewards} />    
      <Tabs.Screen name="PROFILE" component={Profile} />
    </Tabs.Navigator>
  )
}

//Will direct here if not login/ or will create account
const AuthScreens = () => {
  return(
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="login" component={LogIn} />
      <Stack.Screen name="signupCustomer" component={SignupCustomer} />
    </AuthStack.Navigator>
  );
}

//Will navigate here once accessed login
const Screens = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>   
    <Stack.Screen name="clientHomepage" component={ClientHomepage} />
    <Stack.Screen name="customerShops" children={customerBottomTabs} />  
    <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />
    {/* Added Vincent */}
    <Stack.Screen name="explore" component={Explore} />
    <Stack.Screen name="rewards" component={Rewards} />
    <Stack.Screen name="shops" component={Shops} />
    <Stack.Screen name="profile" component={Profile} />
    <Stack.Screen name="shopItems" component={ShopItems} />
    <Stack.Screen name="shopItemsCart" component={ShopItemsCart} />  
    <Stack.Screen name="shopItemsQR" component={ShopItemsQR} />   
    <Stack.Screen name="rewardItems" component={RewardItems} />
    <Stack.Screen name="rewardItemsCart" component={RewardItemsCart} />
    <Stack.Screen name="rewardItemsQR" component={RewardItemsQR} />
    <Stack.Screen name="customerEditProfile" component={CustomerEditProfile} />

    
    {/* Product Add here */}
    <Stack.Screen name="clientProductAdd" component={ClientProductAdd} />
    <Stack.Screen name="clientProductEdit" component={ClientProductEdit} />
    <Stack.Screen name="clientProductList" component={ClientProductList} />
    <Stack.Screen name="clientRewardAdd" component={ClientRewardAdd} />
    <Stack.Screen name="clientRewardEdit" component={ClientRewardEdit} />
    <Stack.Screen name="clientRewardList" component={ClientRewardList} />
    <Stack.Screen name="clientSukiList" component={ClientSukiList} />
    <Stack.Screen name="clientEditProfile" component={ClientEditProfile} />
    {/* End Added Vincent */}
  </Stack.Navigator>
  );
}

//THIS SECTION IS A MOUNT CODE
//Authentication function component
function Authentication(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
      if (firebase.auth().currentUser){
        setIsAuthenticated(true);
      }
      firebase.auth().onAuthStateChanged(user => {
        console.log("Checking auth state...");
        if(user) {
          setIsAuthenticated(true);
        }else{
          setIsAuthenticated(false);
        }
      });
    }, []);

  return(
    <NavigationContainer>
      {isAuthenticated ? <Screens/> : <AuthScreens/>}
    </NavigationContainer>
  );

}

export default class App extends React.Component {
  render() {
    return (
      //call Authentication function component
      <Provider store={store}>
       <Authentication/>
       <FlashMessage position="top" animated={true} />
      </Provider>
      // <ClientAllShopItems/>
      // <ClientAllSuki/>
    )
  };
}

//firebase configuration to connect to firebase
const firebaseConfig = {
  apiKey: "AIzaSyAeHqFIjvpdIl5Yr5nGibf_Ol8rkZrqQwo",
  authDomain: "apresto-b47ae.firebaseapp.com",
  projectId: "apresto-b47ae",
  storageBucket: "apresto-b47ae.appspot.com",
  messagingSenderId: "491750670452",
  appId: "1:491750670452:web:3719bba8d7305392385121"
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
