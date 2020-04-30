import { createStore, combineReducers, applyMiddleware } from 'redux';
import cardsReducer from './reducers/cards';
import myCardsReducer from './reducers/myCards';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducer = combineReducers({
    cardsReducer,
    myCardsReducer
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;