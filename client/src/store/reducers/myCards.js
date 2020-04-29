import { SET_MYCARDS } from '../actions/types';

const initialState = {
  myCards : []
}

export default (state = initialState, action) => {
  switch(action.type){
    case SET_MYCARDS : {
      return { ...state, myCards : action.payload }
    }
    default :
      return state
  }
}