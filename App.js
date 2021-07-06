import React, {useState, useEffect} from 'react';
import firebase from "firebase";
import { Provider } from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";

import SplashScreen from './App/screens/SplashScreen';
import LogIn from './App/screens/LogIn';
import SignupCustomer from './App/screens/customer/signupCustomer';
import Screens from './App/navigation/screensNavigation'

//for reducers
import productsReducer from './App/functions/productsReducer';
import shopReducer from './App/functions/shopReducer';
import cartReducer from './App/functions/cartReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

// combine all reducers into one object
const rootReducer = combineReducers({
  shops: shopReducer,
  products: productsReducer,
  cart: cartReducer
});

// create a store for managing states using the reducers which will be used for data transfer through the app.
const store = createStore(rootReducer);

//Auth navigation
const AuthStack = createStackNavigator();

//Will direct here if not login/ or will create account then navigate to screens in screensNavigator.js
const AuthScreens = () => {
  return(
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="login" component={LogIn} />
      <Stack.Screen name="signupCustomer" component={SignupCustomer} />
    </AuthStack.Navigator>
  );
}

//Authentication function component
function Authentication(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
      if (firebase.auth().currentUser){
        setIsAuthenticated(true);
      }
      firebase.auth().onAuthStateChanged(user => {
        console.log("Checking auth state...");
        if (user) {
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
      //(juswa) provider may be moved as it needs to be placed into the top of app hierarchy...
      <Provider store={store}> 
        <Authentication/>
        <Screens />
      </Provider>
      // <ClientAllShopItems/>
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
firebase.initializeApp(firebaseConfig);
