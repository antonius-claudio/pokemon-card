import { SET_MYCARDS, REMOVE_MYCARDS_BY_ID } from '../actions/types';

const initialState = {
  myCards : []
}

export default (state = initialState, action) => {
  switch(action.type){
    case SET_MYCARDS : {
      return { ...state, myCards : action.payload.cards }
    }
    case REMOVE_MYCARDS_BY_ID: {
      return { ...state, myCards: action.payload.myCards };
    }
    default :
      return state
  }
}