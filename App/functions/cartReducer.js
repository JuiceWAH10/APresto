//for handling cart items
import { ADD_TO_CART } from '../functions/cartFunction';
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

            
            //check if cart has the item to be added
            if(state.items[addedProduct.product_ID]){
                const updateCartItem = new CartItem(
                    state.items[addedProduct.product_ID].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.product_ID].total + prodPrice
                );
                return{
                    ...state,
                    items: { ...state.items, [addedProduct.product_ID]: updateCartItem},
                    totalAmount: state.total + prodPrice
                }
            }
            else{
                const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice)
                return {
                    ...state,
                    items: { ...state.items, [addedProduct.product_ID]: newCartItem },
                    totalAmount: state.total + prodPrice
                };
            }
    }
    return state;
};