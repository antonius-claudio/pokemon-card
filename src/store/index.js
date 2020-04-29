import { createStore, combineReducers } from 'redux';
import cardsReducer from './reducers/cards';
import myCardsReducer from './reducers/myCards';

const reducer = combineReducers({
    cardsReducer,
    myCardsReducer
});

const store = createStore(reducer);

export default store;