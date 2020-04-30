import { createStore, combineReducers, applyMiddleware } from 'redux';
import cardsReducer from './reducers/cards';
import myCardsReducer from './reducers/myCards';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    cardsReducer,
    myCardsReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;