import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../action/action';
import { products } from '../data/data';

// product reducer - quản lí trạng thái liên quan đến sản phẩm
const productsReducer = (state = products, action) => {
    switch (action.type) {
        // switch (key) {
        //     case value:     
        //         break;
        // }
        default:
            return state;
    }
};

//cart reducer - quản lí trạng thái liên quan đến cart
const cartReducer = (state = [], action) => {
    switch (action.type) {

        // ===== add ======
        case ADD_TO_CART:
            const existingProduct = state.find(item => item.id === action.payload.id);
            if (existingProduct) {
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }: item  );
                     }
            return [...state, { ...action.payload, quantity: 1 }];


            // ====== xóa ====
        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload);

            //====== tăng so lg ===
        case INCREASE_QUANTITY:
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            // ===
        case DECREASE_QUANTITY:
            return state.map(item =>
                item.id === action.payload && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0);
        default:
            return state;
    }
};

// ===== khởi tạo reducer để export
const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export default rootReducer;
