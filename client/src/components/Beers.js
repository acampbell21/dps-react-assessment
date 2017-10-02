import React from 'react';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
  state = { beers: [] }

  componentDidMount() {
    fetch('/api/all_beers')
      .then( res => res.json() )
      .then( beers => this.setState({ beers }) )
  }

  render() {
    let { beers: {id, name, description} } = this.state;
    return (
      <div>
          <h1>Why is this not working?</h1>
          <div>Could somebody please tell me why this isnt working!?!!?!?</div>
          <h2>{name}</h2>
          <h3>{description}</h3>
      </div>
    )
  }
}

export default Beers;
