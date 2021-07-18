import React, {useState, useEffect} from 'react';
import firebase from "firebase";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Image } from 'react-native';
import FlashMessage from "react-native-flash-message";

import SplashScreen from './App/screens/SplashScreen';
import LogIn from './App/screens/LogIn';
import SignupCustomer from './App/screens/customer/signupCustomer';
import Screens from './App/navigation/screensNavigation'
import { Provider } from 'react-redux'

//for reducers
import productsReducer from './App/functions/productsReducer';
import rewardsReducer from './App/functions/rewardsReducer';
import shopReducer from './App/functions/shopReducer';
import cartReducer from './App/functions/cartReducer';
import rewCartReducer from './App/functions/rewardsCartReducer';
import { createStore, combineReducers } from 'redux';

// combine all reducers into one object
const rootReducer = combineReducers({
  shops: shopReducer,
  products: productsReducer,
  rewards: rewardsReducer,
  cart: cartReducer,
  rewCart: rewCartReducer
});

// create a store for managing states using the reducers which will be used for data transfer through the app.
const store = createStore(rootReducer);

//Auth Screens
const AuthStack = createStackNavigator();

//Will direct here if not login/ or will create account then navigate to screens in screensNavigator.js
const AuthScreens = () => {
  return(
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="splash" component={SplashScreen} />
      <AuthStack.Screen name="login" component={LogIn} />
      <AuthStack.Screen name="signupCustomer" component={SignupCustomer} />
    </AuthStack.Navigator>
  );
}

//Will navigate here once accessed login
//const Screens = () => {
  //return(
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
  //);
//}

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

export default function App() {
    return (
      //call Authentication function component
      <Provider store={store}>

       <Authentication/>
       <FlashMessage position="top" animated={true} />
       <Authentication />
      </Provider>
    )
  };

//firebase configuration to connect to firebase
const firebaseConfig = {
  apiKey: "AIzaSyAeHqFIjvpdIl5Yr5nGibf_Ol8rkZrqQwo",
  authDomain: "apresto-b47ae.firebaseapp.com",
  projectId: "apresto-b47ae",
  storageBucket: "apresto-b47ae.appspot.com",
  messagingSenderId: "491750670452",
  appId: "1:491750670452:web:3719bba8d7305392385121"
};

//to avoid creating multiple firebase apps and cause error
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
