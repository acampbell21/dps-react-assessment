const beers = (state = [], action ) => {
  switch(action.type) {
    case 'BEERS':
      return action.beers
    case 'ADD_BEER':
      return [action.beer, ...state]
    case 'UPDATE_BEER':
      return state.map( b => {
        if (b.id === action.beer.id)
          return action.beer
        return b
      })
    case 'DELETE_BEER':
      return state.filter( b => b.id !== action.id )
    default:
      return state;
  }
}

export default beers;
