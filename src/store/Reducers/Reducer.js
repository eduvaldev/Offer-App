import { ADD_FILTROS, ADD_SELECT } from '../Constants/constants'

const initalState = {
  filtro: [],
  ofertSelect: null,
  prices: null,
  characteristics: null,
}

const Reducer = (state = initalState, action)=>{
  switch( action.type ){

    case ADD_FILTROS:
      return { ...state, filtro: action.payload }

    case ADD_SELECT:
      return { 
        ...state, 
        ofertSelect: action.payload, 
        prices: action.payload.productOfferingPrices,
        characteristics: action.payload.characteristics
      }

    default:
      return state
  }
};

export default Reducer;
