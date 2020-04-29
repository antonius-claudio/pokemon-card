import { SET_CARDS } from '../actions/types';

const initialState = {
  cards : [],
  testt: 'hallo'
}

export default (state = initialState, action) => {
  switch(action.type){
    case SET_CARDS : {
      return { ...state, cards : action.payload }
    }
    default :
      return state
  }
}