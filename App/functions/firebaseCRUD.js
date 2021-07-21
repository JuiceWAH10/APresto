//iedit pa to
import firebase from "firebase";
import Toast from 'react-native-toast-message';
import React from 'react';

import Products from '../models/products';

/*
{
        product_ID: id,
        shop_ID: "1",
        product_Name: prodName,
        description: prodDes,
        quantity: prodQty,
        status: status,
        imgLink: imgLink
    }
*/

export function createRecord(prodName, prodDes, prodPrice, prodQty, status, imgLink){

    const db = firebase.firestore();
    const ref = db.collection('Products').doc();
    const id = ref.id;
    const product = new Products(id, 1, prodName, prodDes, prodPrice, prodQty, status, imgLink);

    <Toast ref={Toast.setRef} />
    
    firebase.firestore()
    .collection('Products')
    .doc(id)
    .set({
        product_ID: id,
        shop_ID: "1",
        product_Name: prodName,
        description: prodDes,
        quantity: prodQty,
        status: status,
        imgLink: imgLink
    })
    .then((data)=>{
        //success callback
        Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Product Have been Added',
            visibilityTime: 3000,
            autoHide: true,
            topOffset: 100,
            bottomOffset: 40,
        })
        console.log('data ' , data)
        
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    });
}

//needs adjustment, must integrate to reducer
export function readAllProducts(){
    var recentPostsRef = firebase.firestore().ref('/store');
    recentPostsRef.once('value').then(snapshot => {
    // snapshot.val() is the dictionary with all your keys/values from the '/store' path
    this.setState({ stores: snapshot.val() })
})
}

//needs adjustment
export function readRecord() {
    firebase.firestore().ref('Products').on('value', function (snapshot) {
        console.log(snapshot.val())
    });
}

//for single data :/ needs adjustment
export function updateRecord(email){
    firebase.firestore().ref('Users/').update({
        email,
    });
}

//needs adjustment, specify using ID
export function deleteRecord(){
    firebase.firestore().ref('Users/').remove();
}