import { createStore, combineReducers } from 'redux';
import cardsReducer from './reducers/cards';
import myCardsReducer from './reducers/myCards';

const reducer = combineReducers({
    cardsReducer,
    myCardsReducer
});

const store = createStore(reducer);

export default store;

// import { createStore } from 'redux';

// const initialState = {

// }

// export default (state = initialState, { type, payload }) => {
//     switch (type) {

//     case typeName:
//         return { ...state, ...payload }

//     default:
//         return state
//     }
// }
