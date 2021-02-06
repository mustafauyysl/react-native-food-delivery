import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id,
      );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, {...action.payload}];
      }
    case actionTypes.REMOVE_FROM_CART:
      var newState2 = state.map((cartItem) => {
        if (cartItem.product.id === action.payload.product.id) {
          return Object.assign({}, cartItem, {
            quantity: cartItem.quantity - 1,
          });
        }
        return cartItem;
      });
      var finalState = newState2.filter((x) => x.quantity !== 0);
      return finalState;
    default:
      return state;
  }
}
