import { SET_CARDS, SET_CARDS_LOADING } from '../actions/types';

const initialState = {
  cards : [],
  // loading: false
}

export default (state = initialState, action) => {
  switch(action.type){
    case SET_CARDS : {
      console.log('dari reducer card', action.payload)
      return { ...state, cards : action.payload }
    }
    // case SET_CARDS_LOADING : {
    //   return { ...state, loading : action.payload }
    // }
    default :
      return state
  }
}