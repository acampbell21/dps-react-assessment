import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBeers } from '../actions/beers';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';

class Beers extends React.Component {
  state = { category: '' }

  componentDidMount() {
    this.props.dispatch(getBeers())
  }

  beers = () => {
    return this.props.beers.map( beers =>
      <Grid.Column computer={4}>
        <Card>
          <Card.Content>
            <Card.Header>
              {beers.name_display}
            </Card.Header>
            <Card.Description>
              {beers.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/beers/${beers.id}`}>
              View Beer
            </Link>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Beers</Header>
          <Grid columns={16}>
            <Grid.Row>
              { this.beers() }
            </Grid.Row>
          </Grid>
        </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return { beers: state.beers }
}

export default connect(mapStateToProps)(Beers);
