const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger();
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// const initialState = {
//     numOfCakes : 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// const reducer = (state= initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//         default: return state
//     }
// }

const cakeReducer = (state= initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state= initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Intial state', store.getState());
// const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
// unsubscribe()

const course = {
    name: 'Web Programming'
}

const grade = {
    score: 92
}

const finalResult = Object.assign(course, grade, { teacher: 'Mrs Water'});
console.log(finalResult);