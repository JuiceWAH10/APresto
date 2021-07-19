//iedit pa to
import firebase from 'firebase';

import Products from '../models/products';

export function createRecord(prodName, prodDes, prodPrice, prodQty){

    let id = firebase.database().ref('Products').push().key();
    let product = new Products(id, 1, prodName, prodDes, prodPrice, prodQty, 'available')
    
    firebase.database()
    .ref('Products')
    .child(id)
    .push(product)
    .then((data)=>{
        //success callback
        console.log('data ' , data) 
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}

//needs adjustment, must integrate to reducer
export function readAllProducts(){
    var recentPostsRef = firebase.database().ref('/store');
    recentPostsRef.once('value').then(snapshot => {
    // snapshot.val() is the dictionary with all your keys/values from the '/store' path
    this.setState({ stores: snapshot.val() })
})
}

//needs adjustment
export function readRecord() {
    firebase.database().ref('Products').on('value', function (snapshot) {
        console.log(snapshot.val())
    });
}

//for single data :/ needs adjustment
export function updateRecord(email){
    firebase.database().ref('Users/').update({
        email,
    });
}

//needs adjustment, specify using ID
export function deleteRecord(){
    firebase.database().ref('Users/').remove();
}