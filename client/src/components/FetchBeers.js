import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Beers from './Beers';
import BeerView from './BeerView';
import { getBeers } from '../actions/beers';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchBeers extends React.Component {

  componentDidMount() {
    this.props.dispatch(getBeers())
  }

  render() {
    if (this.props.beers) {
      return (
        <div>
          debugger
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

const mapStateToProps = (state) => (
  { beers: state.beers }
)
export default connect(mapStateToProps)(FetchBeers);
