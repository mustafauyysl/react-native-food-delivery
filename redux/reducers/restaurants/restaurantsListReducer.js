import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

export default function restaurantsListReducer(state=initialState.restaurants,action) {
    switch (action.type) {
        case actionTypes.GET_RESTAURANTS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}