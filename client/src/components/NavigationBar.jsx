import React, {Component} from 'react';
import styled from 'styled-components';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
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
              <div className="card-name">
                Telegram-Bot
              </div>
            </NavbarHeader>
            <Clearfix />
          </div>
          <NavbarRight>
            <Navbar.Collapse>
              <Nav>
                <NavItem href="#">
                  Messenger
                </NavItem>
                <NavItem href="#">
                  Bitcoin
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
    return (
      <BreadcrumbsContainer>
        Gift Cards > Charleston > Restaurants > American > Restaurant
        <Clearfix />
      </BreadcrumbsContainer>
    );
  }
}

export { Header, Breadcrumbs };
