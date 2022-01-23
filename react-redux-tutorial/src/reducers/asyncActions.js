const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const inittialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const  FETCH_USERS_SUCCESS  = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR  = 'FETCH_USERS_ERROR';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersError = error => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}

const reducer = (state= inittialState , action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_ERROR:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
    
        default:
            return state;
    }
}

const fetchUsers = () => {
    return function (dispatch) {

        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
              let users = response.data.map(user => user.id);
              dispatch(fetchUsersSuccess(users));
          })
          .catch(error => {
              dispatch(fetchUsersError(error.message));
          })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() =>console.log(store.getState()));
store.dispatch(fetchUsers());