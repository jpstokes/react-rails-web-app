import React, { Component } from 'react';
import styled from 'styled-components';
import Main from './Main.jsx';

const Container = styled.div`
`

class Home extends Component {
  render() {
    return (
      <Container className="Home">
        <Main {...this.props}/>
      </Container>
    );
  }
}

export default Home;
