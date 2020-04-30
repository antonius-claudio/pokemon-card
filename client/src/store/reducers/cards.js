import { SET_CARDS, GET_CARDS, GET_CARDS_BY_ID, GET_CARDS_BY_NAME } from '../actions/types';

const initialState = {
  cards : [],
  selected: {}
  // loading: false
}

export default (state = initialState, action) => {
  switch(action.type){
    case SET_CARDS : {
      console.log('dari reducer card', action.payload)
      return { ...state, cards : action.payload };
    }
    case GET_CARDS : {
      console.log('dari reducer get card', action.payload)
      return { ...state, cards : action.payload };
    }
    case GET_CARDS_BY_ID: {
      return { ...state, selected: action.payload };
    }
    case GET_CARDS_BY_NAME: {
      return { ...state, cards: action.payload };
    }
    // case SET_CARDS_LOADING : {
    //   return { ...state, loading : action.payload }
    // }
    default :
      return state
  }
}