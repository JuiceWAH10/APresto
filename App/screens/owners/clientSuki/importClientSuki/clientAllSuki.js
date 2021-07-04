import React from 'react';
import { 
    Image,
    StyleSheet,
    Text, 
    View, 
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function clientAllSuki(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.sukiImage}
                    source={require('../../../../assets/eat.jpg')}>
            </Image>
            <View style={styles.sukiContainer}>
                <Text style={styles.sukiName}>Suki Name</Text>
                <Text style={styles.sukiStatus}>Follower</Text>
                <Text style={styles.sukiInfo}>Available Points: 100</Text>
                <Text style={styles.sukiInfo}>Used Points: 20</Text>
                <Text style={styles.sukiInfo}>Buying Transactions: 8</Text>
                <Text style={styles.sukiInfo}>Reward Transactions: 3</Text>
            </View>
        </View>
    );
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
    sukiContainer:{
        flexDirection: "column",
        width: wp('50%'),
    },
    sukiImage: {
        alignSelf: "center",
        borderRadius: 15,
        flexDirection: "column",
        height: 140,
        width: wp('30%'),
        borderWidth: 1
    },
    sukiInfo: {
        alignSelf: "center",
        fontSize: 14,
        marginRight: 10
    },
    sukiName: {
        alignSelf: "center",
        marginBottom: 2,
        marginTop: 6,
        fontSize: 18,
        fontWeight: "bold"
    },
    sukiStatus: {
        alignSelf: "center",
        fontSize: 14,
        fontWeight: "bold"
    },
})
export default clientAllSuki;