//for handling cart items
import { ADD_TO_CART, REMOVE_FROM_CART } from '../functions/cartFunction';
import CartItem from '../models/cartItem';
//import cartItems

const initialState = {
    items: {},
    total: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            const cartItem;
            
            //check if cart has the item to be added
            if(state.items[addedProduct.product_ID]){
                cartItem = new CartItem(
                    state.items[addedProduct.product_ID].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.product_ID].total + prodPrice
                );
            }
            else{
                cartItem = new CartItem(1, prodPrice, prodTitle, prodPrice)
            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.product_ID]: cartItem },
                totalAmount: state.total + prodPrice
            };

        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.product_ID]
            const currentQty = selectedCartItem.quantity;
            let cartItems;
            if(currentQty > 1){
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1, 
                    selectedCartItem.productPrice, 
                    selectedCartItem.productTitle, 
                    selectedCartItem.total - selectedCartItem.productPrice
                );
                cartItems = { ...state.items, [action.product_ID]: updatedCartItem}
            }
            else{
                cartItems = { ...state.items };
                delete cartItems[action.product_ID];
            }
            return {
                ...state,
                items: cartItems,
                totalAmount: state.totalAmount - selectedCartItem.productPrice
            }

    }
    return state;
};