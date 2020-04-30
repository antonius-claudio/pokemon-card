import { SET_MYCARDS, REMOVE_MYCARDS_BY_ID } from './types';

export function setMyCards(params) {
    return {
        type: SET_MYCARDS,
        payload: {cards: params}
    };
};

export function removeMyCardsById(id) {
    console.log('masuk remove action', id)
    return (dispatch, getState) => {
        let cards = getState().myCardsReducer.myCards;
        let newCards = cards.filter((card) => String(card.id) != String(id));
        dispatch ({
            type: REMOVE_MYCARDS_BY_ID,
            payload: {
                myCards: newCards
            }
        })
    };
}