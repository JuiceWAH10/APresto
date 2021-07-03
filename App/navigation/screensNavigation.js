import { createStackNavigator, createAppContainer } from "@react-navigation/stack";
import { customerBottomTabs } from './bottomTabs';

// Customer Screens

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

// Client Screens
import ClientHomepage from './App/screens/owners/clientHomepage';
import ClientProductAdd from './App/screens/owners/clientProduct/clientProductAdd';
import ClientProductEdit from './App/screens/owners/clientProduct/clientProductEdit';
import ClientProductList from './App/screens/owners/clientProduct/clientProductList';
import ClientRewardAdd from './App/screens/owners/clientReward/clientRewardAdd';
import ClientRewardEdit from './App/screens/owners/clientReward/clientRewardEdit';
import ClientRewardList from './App/screens/owners/clientReward/clientRewardList';

import CustomerShopItem from './App/screens/CustomerShopItem';
import CustomerRewardItem from './App/screens/CustomerRewardItem';
import CustomerCart from './App/screens/CustomerCart';
import CustomerProdQRCode from './App/screens/CustomerProdQRCode';
import CustomerRewQRCode from './App/screens/CustomerRewQRCode';
import ClientHome from './App/screens/ClientHome';
import MyProducts from './App/screens/MyProducts';
import MyRewards from './App/screens/MyRewards';
import ClientAddProduct from './App/screens/ClientAddProduct';
import ClientEditProduct from './App/screens/ClientEditProduct';
import ClientAddReward from './App/screens/ClientAddReward';
import ClientEditReward from './App/screens/ClientEditReward';
import MySuki from './App/screens/MySuki';
import ClientProfile from './App/screens/ClientProfile';
import QRCodeScanner from './App/screens/QRCodeScanner.js';

const Stack = createStackNavigator();

const Screens = () => {
    return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
  
      <Stack.Screen name="clientHomepage" component={ClientHomepage} />
      <Stack.Screen name="clientProductAdd" component={ClientProductAdd} />
      <Stack.Screen name="clientProductEdit" component={ClientProductEdit} />
      <Stack.Screen name="clientProductList" component={ClientProductList} />
      <Stack.Screen name="clientRewardAdd" component={ClientRewardAdd} />
      <Stack.Screen name="clientRewardEdit" component={ClientRewardEdit} />
      <Stack.Screen name="clientRewardList" component={ClientRewardList} />
      {/* End Added Vincent */}
  
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
      <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />
    </Stack.Navigator>
    );
}

export default createAppContainer(Screens); //could be wrong :/ ; using this Screens will be the rendered component of this file