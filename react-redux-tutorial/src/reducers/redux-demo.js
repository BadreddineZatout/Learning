const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger  = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAMS = 'BUY_ICE_CREAMS';

function buy_cake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buy_ice_cream(){
    return {
        type: BUY_ICE_CREAMS,
    }
}

/* const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
} */

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 20,
}

/* const reducer = (state= initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case BUY_ICE_CREAMS:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state;
    }
} */

const cakeReducer = (state= initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
}

const iceCreamReducer = (state= initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAMS:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => {/* console.log('Updated State', store.getState()) */});
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_ice_cream());
store.dispatch(buy_ice_cream());

unsubscribe();