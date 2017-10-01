import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Beers from './Beers';
import BeerView from './BeerView';
import { getBeers } from '../actions/beers';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchBeers extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getBeers(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    let { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:id" component={BeerView} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchBeers);
