import React, { Component } from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import { Header, Breadcrumbs } from './components/NavigationBar';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import Col from 'react-bootstrap/lib/Col';
import BusinessService from './services/business.service';

const Container = styled.div`

`

class App extends Component {
  componentWillMount() {
    // Hardcoding Yelp's ID for demo purposes.
    BusinessService.getBusiness(1)
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(error => {

      })
    BusinessService.getReviews(1)
      .then(response => {
        this.setState({ reviews: response.data });
      })
      .catch(error => {

      })
  }

  render() {
    const business = this.state && this.state.business;
    const reviews = this.state && this.state.reviews;

    return (
      <Container className="App">
        { business && reviews
          ? <div>

            <Header {...this.state}/>
            <Clearfix />
            <Breadcrumbs {...this.state}/>
            <Clearfix />
            <Grid>
              <Row>
                <Col xs={10} xsOffset={1} sm={8} smOffset={2}>
                  <Home {...this.state}/>
                </Col>
              </Row>
            </Grid>

          </div>
          : null
        }
      </Container>
    );
  }
}

export default App;
