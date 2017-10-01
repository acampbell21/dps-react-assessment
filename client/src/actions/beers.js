import axios from 'axios';

// get all beers - index action of our beers controller
// this.props.dispatch(getBeers())
export const getBeers = (cb) => {
  // thunk
  return(dispatch) => {
    axios.get('/api/all_beers')
      .then( res => dispatch({ type: 'APPS', beers: res.data }))
      .then( cb )
  }
}

// add an beer - create action of our beers controller
// res.data = { id: 1, name: 'Angry Birds', featured: true }
export const addBeer = (beer) => {
  return(dispatch) => {
    axios.post('/api/beers', { beer })
      .then( res => dispatch({ type: 'ADD_APP', beer: res.data }))
  }
}

// update an beer - update action of our beers controller
export const updateBeer = (beer) => {
  return (dispatch) => {
    axios.put(`/api/beers/${beer.id}`, { beer } )
      .then( res => dispatch({ type: 'UPDATE_APP', beer: res.data }) )
  }
}



// delete an beer - delete action of our beers controller
export const deleteBeer = (id) => {
  return(dispatch) => {
    axios.delete(`/api/beers/${id}`)
      .then( res => dispatch({ type: 'DELETE_APP', id }))
  }
}

export default getBeers;
