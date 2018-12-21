import { CHANGE_SEARCH_FIELD,
        REQUEST_PEOPLE_PENDING,
        REQUEST_PEOPLE_SUCCESS,
        REQUEST_PEOPLE_FAILED } from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestDirectory = () => (dispatch) => {
    dispatch({ type: REQUEST_PEOPLE_PENDING });
    fetch('https://randomuser.me/api/?results=100')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_PEOPLE_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_PEOPLE_FAILED, payload: error }));  
}