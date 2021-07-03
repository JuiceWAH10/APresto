import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Explore from './App/screens/customer/explore';
import Shops from './App/screens/customer/shops';
import Profile from './App/screens/customer/profile';
import Rewards from './App/screens/customer/rewards';

const Tabs = createBottomTabNavigator();

export const customerBottomTabs = () =>{
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
          activeTintColor: "#fd4140",
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
