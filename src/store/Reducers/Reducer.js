import { ADD_CITY_MEDELLIN, SEARCH_CITY, CLOSE_CITY } from '../Constants/constants'

const initalState = {
  cities: [],
  currentCity: {},
}

const Reducer = (state = initalState, action)=>{
  switch( action.type ){

    default:
      return state
  }
};

export default Reducer;
