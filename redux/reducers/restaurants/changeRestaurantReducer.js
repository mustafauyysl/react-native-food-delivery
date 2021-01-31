import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

export default function changeRestaurantReducer(state=initialState.clickedRestaurant,action){
    switch (action.type) {
        case actionTypes.CHANGE_RESTAURANT:
            return action.payload;
    
        default:
            return state;
    }
}