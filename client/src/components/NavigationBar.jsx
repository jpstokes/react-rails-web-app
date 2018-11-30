import React, {Component} from 'react';
import styled from 'styled-components';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import logo from '../assets/giftly-logo-header.png';
import Clearfix from 'react-bootstrap/lib/Clearfix';

const Container = styled.div`
  background: #F0EFE7;
  color: #65543C;
  clear: both;
  height: 60px;

  .container {
    background: transparent;
  }

  .navbar-brand {
    padding: 0 8px;
  }

  .card-name {
    position: relative;
    top: 20px;

  }

  .navbar-default {
    background-color: #F0EFE7;
    border-color: #F0EFE7;
  }
`

const BreadcrumbsContainer = styled.div`
  padding: 4px 20px;
  color: #A3BCC1;
  font-size: 16px;
  margin-bottom: 30px;
`

const NavbarHeader = styled.div`
  width: 400px;
  float: left;
`

const NavbarRight = styled.div`
  width: 400px;
  float: right;
  .nav-item {
    float: left;
    padding: 20px;
  }
`

class Header extends Component {
  render() {
    return (
      <Container>
        <Navbar>
          <div style={{position: 'absolute', left: 20}}>
            <NavbarHeader>
              <Navbar.Brand>
                <img alt="" src={logo} />
              </Navbar.Brand>
              <div className="card-name">
                {this.props.business.name} Gift Card
              </div>
            </NavbarHeader>
            <Clearfix />
          </div>
          <NavbarRight>
            <Navbar.Collapse>
              <Nav>
                <NavItem href="#">
                  Browse
                </NavItem>
                <NavItem href="#">
                  Corporate Gifts
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </NavbarRight>
        </Navbar>
      </Container>
    );
  }
}

class Breadcrumbs extends Component {
  render() {
    const business = this.props.business
    return (
      <BreadcrumbsContainer>
        Gift Cards > {business.location.city} > Restaurants > American > {business.name}
        <Clearfix />
      </BreadcrumbsContainer>
    );
  }
}

export { Header, Breadcrumbs };
