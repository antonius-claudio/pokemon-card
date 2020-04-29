import { SET_CARDS, SET_CARDS_LOADING } from './types';

export function setCards(params) {
    console.log('dari card actions', params)
    return {
        type: SET_CARDS,
        payload: params
    };
};

// export function setCardsLoading(params) {
//     return {
//         type: SET_CARDS_LOADING,
//         payload: params
//     }
// }