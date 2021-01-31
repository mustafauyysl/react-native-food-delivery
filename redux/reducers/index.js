import {combineReducers} from 'redux';
import restaurantsListReducer from './restaurants/restaurantsListReducer';
import changeRestaurantReducer from './restaurants/changeRestaurantReducer';
import productsListReducer from './products/productsListReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
    restaurantsListReducer,
    changeRestaurantReducer,
    productsListReducer,
    cartReducer
})

export default rootReducer;