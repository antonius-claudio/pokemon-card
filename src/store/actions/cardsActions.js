import { SET_CARDS, GET_CARDS, GET_CARDS_BY_ID, GET_CARDS_BY_NAME } from './types';

export function setCards(params) {
    console.log('dari card actions', params)
    return {
        type: SET_CARDS,
        payload: params
    };
};

export function getCards() {
    return (dispatch) => {
        fetch('https://api.pokemontcg.io/v1/cards')
            .then((result) => result.json())
            .then((result) => {
                dispatch ({
                    type: GET_CARDS,
                    payload: {
                        cards: result.cards
                    }
                })
            })
    }
}

export function getCardsById(id) {
    return (dispatch) => {
        fetch(`https://api.pokemontcg.io/v1/cards/${id}`)
            .then((result) => result.json())
            .then((result) => {
                dispatch ({
                    type: GET_CARDS_BY_ID,
                    payload: {
                        selected: result.card
                    }
                })
            })
    }
}

export function getCardsByName(search) {
    return (dispatch) => {
        fetch(`https://api.pokemontcg.io/v1/cards?name=${search}`)
            .then((result) => result.json())
            .then((result) => {
                console.log('resullllllllllllllt', result.cards)
                dispatch ({
                    type: GET_CARDS_BY_NAME,
                    payload: {
                        cards: result.cards
                    }
                })
            })
    }
}

// export function setCardsLoading(params) {
//     return {
//         type: SET_CARDS_LOADING,
//         payload: params
//     }
// }