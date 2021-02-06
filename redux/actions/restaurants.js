import * as actionTypes from './actionTypes';

export function changeRestaurant(restaurant) {
  return {type: actionTypes.CHANGE_RESTAURANT, payload: restaurant};
}

export function getRestaurantsSuccess(restaurants) {
  return {type: actionTypes.GET_RESTAURANTS_SUCCESS, payload: restaurants};
}

export function getRestaurants() {
  return function (dispatch) {
    let url = 'http://localhost:3000/restaurants';
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getRestaurantsSuccess(result)));
  };
}
