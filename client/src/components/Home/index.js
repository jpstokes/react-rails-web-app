import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import Main from './Main.jsx';

const Container = styled.div`
`

class Home extends Component {
  render() {
    return (
      <Container className="Home">
        <Header {...this.props}/>
        <Main {...this.props}/>
      </Container>
    );
  }
}

export default Home;
