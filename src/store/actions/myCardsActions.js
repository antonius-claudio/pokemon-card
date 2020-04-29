import { SET_MYCARDS } from './types';

export function setMyCards(params) {
    return {
        type: SET_MYCARDS,
        payload: params
    };
};