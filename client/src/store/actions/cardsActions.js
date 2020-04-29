import { SET_CARDS } from './types';

export function setCards(params) {
    return {
        type: SET_CARDS,
        payload: params
    };
};