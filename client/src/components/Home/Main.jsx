import React, { Component } from 'react';
import styled from 'styled-components';
import  Panel from 'react-bootstrap/lib/Panel';
import  Button from 'react-bootstrap/lib/Button';
import guaranteed_symbol from '../../assets/giftly-guarantee.png';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import logoSmall from '../../assets/giftly-small-white.png';

const Container = styled.div`
  .panel {
    border-radius: 0;
    text-align: left;
    border: 1px solid #ddd;
  }

  .panel-footer {
    background: transparent;
    padding: 10px 50px;
    ul {
      margin: auto;
      width: auto;
      li {
        float: left;
        list-style: none;
        width: 20%;
      }
    }
  }

  .panel-body {
    padding: 20px 50px;
    text-align: left;
  }

  .btn {
    background: #1BBFDF;
    border: #1BBFDF;
    width: 60%;
  }
`

const GaranteeContainer = styled.div`
  width: 235px;
  color: #1BBFDF;
`

const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 10px;
`

const StyledPanelMain = styled(Panel)`
  .panel-heading {
    border-top: 4px solid #A3BCC1;
    border-bottom: 0;
    color: #A3BCC1;
    font-size: 26px;
    text-align: center;
  }
  .panel-footer {
    color: #1BBFDF;
    background: transparent;
    border-top: 1px solid #ddd;
    text-align: center;
    ul {
      margin: 0
      li {
        float: left;
        list-style: none;
        width: 20%;
      }
    }
  }
`

const StyledPanel = styled(Panel)`
  p {
    margin-bottom: 20px;
  }
  .panel-heading {
    background: #fff;
    border-bottom: 0;
    color: #A3BCC1;
    font-size: 26px;
    text-align: left;
    padding: 20px 50px;
  }
  .restaurant-types, .restaurant-city {
    color: #1BBFDF;
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        margin-bottom: 15px;
      }
    }
  }
  .gift-card-types {
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        margin-bottom: 15px;
      }
    }
  }

`

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10 && length < 235) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Container className="Main">
        { true
          ? <div>
          <StyledPanelMain>
            <Panel.Heading>
              Enter Message
            </Panel.Heading>
            <Panel.Body>
              <form>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Send private message:</ControlLabel>
                  <FormControl
                    componentClass="textarea"
                    rows={5}
                    value={this.state.value}
                    placeholder="Enter message"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Message should be under 235 characters.</HelpBlock>
                </FormGroup>
              </form>
              <ButtonContainer>
                <Button bsStyle="primary">Send Message &raquo;</Button>
              </ButtonContainer>
            </Panel.Body>
          </StyledPanelMain>
          <StyledPanel>
            <Panel.Heading>
              Telegram Messages
            </Panel.Heading>
            <Panel.Body>
              <ul>
                <li>Telegrame message.</li>
                <li>Telegrame message.</li>
                <li>Telegrame message.</li>
                <li>Telegrame message.</li>
                <li>Telegrame message.</li>
              </ul>
            </Panel.Body>
          </StyledPanel>
          </div>
          : null
        }
      </Container>
    );
  }
}

export default Main;
