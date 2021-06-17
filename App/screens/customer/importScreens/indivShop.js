import React from 'react';
import { 
    Image,
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function indivShop(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('shopItems')}>
            <View style={styles.container}>
                <Image style={styles.shopImage}
                    source={require('../../../assets/DummyShop.jpg')}>
                </Image>
                <View style={styles.shopLine1}>
                    <Text style={styles.shopName}>Shop Name</Text>
                    <View style={styles.shopReview}>
                        <Icon name="star" size={20} color="#fd4140" />
                        <Text style={styles.shopReviewScore}>4.5 / 5</Text>
                    </View>
                </View>
                <Text style={styles.shopAddress}>Address</Text>
                <Text style={styles.shopSpecialty}>Specialty</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        flexDirection: "column",
        marginBottom: 6,
        height: 220,
        width: wp('90%'),
    },
    shopAddress: {
        marginBottom: 2,
        marginLeft: 20,
        fontSize: 14,
        opacity: .5
    },
    shopImage: {
        alignSelf: "center",
        borderRadius: 15,
        flexDirection: "column",
        height: 140,
        width: wp('90%'),
        borderWidth: 1
    },
    shopLine1: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: wp('90%'),
    },
    shopName: {
        marginBottom: 2,
        marginLeft: 20,
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    shopReview: {
        flexDirection: "row",
        marginBottom: 2,
        marginRight: 20,
        marginTop: 5,
    },
    shopReviewScore: {
        flexDirection: "row",
        fontSize: 16,
        marginBottom: 2,
        marginLeft: 5,
        marginTop: 1
    },
    shopSpecialty: {
        marginBottom: 2,
        marginLeft: 20,
        fontSize: 14,
    },
    
})

export default indivShop;