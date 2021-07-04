import { createStackNavigator, createAppContainer } from "@react-navigation/stack";
import { customerBottomTabs } from './bottomTabs';

// Customer Screens

import Explore from '../screens/customer/explore';
import Shops from '../screens/customer/shops';
import Profile from '../screens/customer/profile';
import Rewards from '../screens/customer/rewards';
import ShopItems from '../screens/customer/shopItems/shopItems';
import RewardItems from '../screens/customer/rewardItems/rewardItems';
import ShopItemsCart from '../screens/customer/shopItems/shopItemsCart';
import RewardItemsCart from '../screens/customer/rewardItems/rewardItemsCart';
import ShopItemsQR from '../screens/customer/shopItems/shopItemsQR';
import RewardItemsQR from '../screens/customer/rewardItems/rewardItemsQR';

// Client Screens
import ClientHomepage from '../screens/owners/clientHomepage';
import ClientProductAdd from '../screens/owners/clientProduct/clientProductAdd';
import ClientProductEdit from '../screens/owners/clientProduct/clientProductEdit';
import ClientProductList from '../screens/owners/clientProduct/clientProductList';
import ClientRewardAdd from '../screens/owners/clientReward/clientRewardAdd';
import ClientRewardEdit from '../screens/owners/clientReward/clientRewardEdit';
import ClientRewardList from '../screens/owners/clientReward/clientRewardList';

import CustomerShopItem from '../screens/CustomerShopItem';
import CustomerRewardItem from '../screens/CustomerRewardItem';
import CustomerCart from '../screens/CustomerCart';
import CustomerProdQRCode from '../screens/CustomerProdQRCode';
import CustomerRewQRCode from '../screens/CustomerRewQRCode';
import ClientHome from '../screens/ClientHome';
import MyProducts from '../screens/MyProducts';
import MyRewards from '../screens/MyRewards';
import ClientAddProduct from '../screens/ClientAddProduct';
import ClientEditProduct from '../screens/ClientEditProduct';
import ClientAddReward from '../screens/ClientAddReward';
import ClientEditReward from '../screens/ClientEditReward';
import MySuki from '../screens/MySuki';
import ClientProfile from '../screens/ClientProfile';
import QRCodeScanner from '../screens/QRCodeScanner.js';

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