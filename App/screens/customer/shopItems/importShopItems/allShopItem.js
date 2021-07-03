import React from 'react';
import { 
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class allShopItem extends Component {
    
    renderProducts = (products) => {
        return products.map((item, index) => {
            return (
                <View key={index} style={styles.container}>
                    <Image style={styles.itemImage}
                            source={require('../../../../assets/DummyShop.jpg')}>
                    </Image>
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.product_name}</Text>
                        <Text style={styles.itemPrice}>{item.price}</Text>
                        <Text style={styles.itemInfo}>Product Definition</Text>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity onPress={()=>console.log("Pressed")}>
                                <Icon name="add-circle" size={35} color="#356288" />
                            </TouchableOpacity>
                            <Text style={styles.quantity}>Qty</Text>
                            <TouchableOpacity onPress={()=>console.log("Pressed")}>
                                <Icon2 name="minus-circle" size={35} color="#356288" />
                            </TouchableOpacity>    
                        </View>
                    </View>
                </View>
            );
        })
    }

    render() {
        return (
            <View>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonsContainer:{
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        height: 40,
        width: 80
    },
    container: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 6,
        height: 140,
        width: wp('90%'),
    },
    itemContainer:{
        flexDirection: "column",
        width: wp('50%'),
    },
    itemImage: {
        alignSelf: "center",
        borderRadius: 15,
        flexDirection: "column",
        height: 140,
        width: wp('30%'),
        borderWidth: 1
    },
    itemInfo: {
        alignSelf: "center",
        fontSize: 14,
        marginRight: 10
    },
    itemName: {
        alignSelf: "center",
        marginBottom: 2,
        marginTop: 6,
        fontSize: 18,
        fontWeight: "bold"
    },
    itemPrice: {
        alignSelf: "center",
        fontSize: 14,
        fontWeight: "bold"
    },
    quantity: {
        textAlign: "center",
        marginTop: 5,
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 4,
        marginRight: 4      
    },
})
export default allShopItem;