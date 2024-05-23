// reducers.js

const initialState = {
  products: [],
  selectedProduct: null
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload)
      }
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(p => p.id === action.payload.id ? action.payload : p),
        selectedProduct: null
      }
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload
      }
    default:
      return state
  }
}

export default productReducer