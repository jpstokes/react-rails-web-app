import React, { Component } from 'react';
import styled from 'styled-components';
import  Panel from 'react-bootstrap/lib/Panel';
import  Button from 'react-bootstrap/lib/Button';
import guaranteed_symbol from '../../assets/giftly-guarantee.png';
import birthdayCard from '../../assets/happy-birthday-greeting-card.png';
import dinner from '../../assets/dinner-at-any-restaurant.png';
import anything from '../../assets/anything-at-anyplace.png'
import enjoy from '../../assets/enjoy-greeting-card.png';
import birthdayCandles from '../../assets/happy-birthday-candles-greeting-card.png';
import congrats from '../../assets/congrats-greeting-card.png';
import loveCard from '../../assets/love-greeting-card.png';
import movies from '../../assets/movies-at-any-theater.png';
import photo from '../../assets/photo-greeting-card.png';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import yelpLogo from '../../assets/yelp_logo.png';
import Map from './map';
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

const CustomizableCardsPanel = styled(Panel)`
  .panel-heading {
    background: #fff;
    border-bottom: 0;
    color: #A3BCC1;
    font-size: 18px;
    text-align: center;
    padding: 20px 20px 0 20px;
  }
  ul {
    margin: auto;
    padding: 0;
    width: fit-content;
    margin-bottom: 100px;
    li {
      list-style: none;
      float: left;
      padding: 4px;
    }
  }
  img {
    width: 60px;
  }
`

const AboutUsPanel = styled(StyledPanel)`
  img.photo {
    width: 130px;
    border-radius: 4px;
    clip-path: inset(0px 30px 0px 0px);
  }
  .business-name {
    font-size: 20px;
    position: relative;
    top: -7px;
  }
  .rating {
    background: url(https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png) no-repeat;
    background-size: 132px 560px;
    display: inline-block;
    vertical-align: middle;
    height: 24px;
    background-position: 0 -168px;
    padding-left: 140px;
    width: 350px;
    img {
      width: 60px;
    }
  }
  .review-count {
    position: relative;
    top: -5px;
    font-size: 10px;
  }
  .reviews {
    img {
      float: left;
    }
    .text {
      position: relative;
      top: 13px;
      float: left;
      font-size: 20px;
    }
    .review-rating {
      background: url(https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png) no-repeat;
      background-size: 132px 560px;
      display: inline-block;
      vertical-align: middle;
      height: 18px;
      background-position: 16px -366px;
      padding: 0;
    }
    .review {
      position: initial;
      margin-top: -6px;
      font-size: 14px;
      margin-left: -16px;
    }
  }
`

class Main extends Component {
  render() {
    const business = this.props && this.props.business;
    const reviews = this.props && this.props.reviews;
    return (
      <Container className="Main">
        { business && reviews
          ? <div>
          <StyledPanelMain>
            <Panel.Heading>
              Buy a Gift Card to {business.name}
            </Panel.Heading>
            <Panel.Body>
              <p>
                Send a personalized cash gift card that is suggested for use at
                &nbsp;<span style={{color: '#F1B01B', fontWeight: 'bold'}}>{business.name}</span>. Any amount up to $1,000. Deliver by email, mail, or print
                at home.
              </p>
              <p>
                You suggest where to go and what to get— the recipient always get
                what they want.
              </p>
              <ButtonContainer>
                <Button bsStyle="primary">Customize & Build >> </Button>
              </ButtonContainer>
              <GaranteeContainer style={{margin: 'auto'}}>
                <img alt="" style={{float: 'left'}} src={guaranteed_symbol}/>
                <div style={{float: 'right', position: 'relative', top: '6px'}}>100% satisfaction guaranteed</div>
              </GaranteeContainer>
            </Panel.Body>
            <Panel.Footer>
              <Row>
                <Col xs={4} style={{borderRight: '1px solid #ddd', padding: '10px'}}>How it works</Col>
                <Col xs={4} style={{padding: '10px'}}>Sample gift</Col>
                <Col xs={4} style={{borderLeft: '1px solid #ddd', padding: '10px'}}>Why Giftly</Col>
              </Row>
            </Panel.Footer>
          </StyledPanelMain>
          <CustomizableCardsPanel>
            <Panel.Heading>
              Customizable greeting cards available for every occassion
            </Panel.Heading>
            <Panel.Body>
              <ul>
                <li><img alt="" src={birthdayCard}/></li>
                <li><img alt="" src={enjoy}/></li>
                <li><img alt="" src={congrats}/></li>
                <li><img alt="" src={photo}/></li>
                <li><img alt="" src={loveCard}/></li>
                <li><img alt="" src={birthdayCandles}/></li>
              </ul>
            </Panel.Body>
          </CustomizableCardsPanel>
          <AboutUsPanel>
            <Panel.Heading>
              About {business.name}
            </Panel.Heading>
            <Panel.Body>
              <div style={{marginBottom: 20, clear: 'both'}}>
                <img className="photo" alt="" src={business.image_url} style={{float: 'left'}}/>
                <div style={{float: 'left'}}>
                  <div className="business-name">{business.name}</div>
                  <div className="rating">
                    <div className="review-count">
                      based on {business.review_count} on <img alt="yelp logo" src={yelpLogo}/>
                    </div>
                  </div>
                  <div>{business.location.address1}, {business.location.city}, {business.location.state}</div>
                  <div>{business.phone}</div>
                </div>
                <Clearfix />
              </div>
              <Clearfix />
              <Row>
                <Col xs={3}>
                  <div>
                    <div>Categories</div>
                    <div>{business.categories.join(', ')}</div>
                  </div>
                </Col>
                <Col xs={3}>
                  <div>
                    <div>Price Range</div>
                    <div>{business.price}</div>
                  </div>
                </Col>
                <Col xs={3}>
                  <div>
                    <div>Neighborhood</div>
                    <div>Hayes Valley</div>
                  </div>
                </Col>
                <Col xs={3}>
                  <div>
                    <div>Cross Streets</div>
                    <div>{business.location.cross_streets}</div>
                  </div>
                </Col>
              </Row>
              <Map
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `150px` }} />}
                mapElement={<div style={{ height: `100%` }} />}>
              </Map>
              <div className="reviews">
                <div>
                  <img alt="yelp logo" src={yelpLogo} style={{width: 80}}/>
                  <div className="text">reviews for {business.name}</div>
                  <Clearfix />
                </div>
                { reviews && reviews.map((review, index) =>
                  <Row key={index} style={{marginBottom: 20}}>
                    <Col xs={3} className="review-rating"></Col>
                    <Col xs={9} className="review">"{review.text}" <span style={{color: '#1BBFDF'}}>read more</span></Col>
                  </Row>
                )}
              </div>
            </Panel.Body>
            <Panel.Footer>
              Is this your business? Take a moment to <span style={{color: '#1BBFDF'}}>claim the page</span> and customize for free.
            </Panel.Footer>
          </AboutUsPanel>
          <StyledPanel>
            <Panel.Heading>
              If not {business.name}, they may also enjoy
            </Panel.Heading>
            <Panel.Body>
              <p>Browse places similar to {business.name}</p>
              <Row>
                <Col xs={6} className="restaurant-types">
                  <ul>
                    <li>Italian restaurants in {business.location.city}</li>
                    <li>French restaurants in {business.location.city}</li>
                  </ul>
                </Col>
                <Col xs={6} className="restaurant-city">
                  <ul>
                    <li>Restaurant in Hayes Valley</li>
                    <li>Restaurants in {business.location.city}</li>
                  </ul>
                </Col>
              </Row>
              <p>Or perhaps,</p>
              <Row>
                <Col xs={4} className="gift-card-types">
                  <ul>
                    <li><img alt="" src={dinner}/></li>
                    <li>Dinner at Any restaurant</li>
                  </ul>
                </Col>
                <Col xs={4} className="gift-card-types">
                  <ul>
                    <li><img alt="" src={anything}/></li>
                    <li>Anything at Any place</li>
                  </ul>
                </Col>
                <Col xs={4} className="gift-card-types">
                  <ul>
                    <li><img alt="" src={movies}/></li>
                    <li>Movies at Any theater</li>
                  </ul>
                </Col>
              </Row>
              <p style={{color: '#1BBFDF', textDecorationLine: 'underline'}}>Browse more gift ideas</p>
            </Panel.Body>
          </StyledPanel>
          <StyledPanel>
            <Panel.Heading>
              Why buy a gift card using <img alt="" src={logoSmall}/>?
            </Panel.Heading>
            <Panel.Body>
              <p>
                Giftly makes it easy to send a gift card that's personal, but also flexible and convenient. It's the perfect last minute gift for a birthday, graduation, wedding, holiday, and more.
              </p>
              <p>
                Give any amount up to $1,000 and suggest any business, item, or experience you think the recipient will enjoy. Deliver in a customized greeting card or e-greeting card.
              </p>
              <p>
                Gifts can be sent electronically by email or text¹ , printed at home, or delivered in the mail.
              </p>
              <p>
                Your recipient redeems online and chooses how to receive the money. They can spend their funds at Zuni Café, or elsewhere if they prefer. There is no physical gift certificate to carry around or lose.
              </p>
              <p>
                Gift cards sent through Giftly never expire and there are no fees, so recipients can redeem at any time.
              </p>
              <p>
                Giftly combines the flexibility and convenience of giving money, but includes a thoughtful suggestion that makes it more personal.
              </p>
              <ButtonContainer>
                <Button bsStyle="primary">See an example gift >> </Button>
              </ButtonContainer>
            </Panel.Body>
          </StyledPanel>
          <StyledPanel>
            <Panel.Heading>
              Help
            </Panel.Heading>
            <Panel.Body>
              <p>
                If you have questions, need help, or want to modify, resend, or
                cancel a gift, please see our Support Center, where you can
                access an array of self-service tools and our FAQ.
              </p>
              <GaranteeContainer>
                <img alt="" style={{float: 'left'}} src={guaranteed_symbol}/>
                <div style={{float: 'right', position: 'relative', top: '6px'}}>100% satisfaction guaranteed</div>
              </GaranteeContainer>
            </Panel.Body>
          </StyledPanel>
          <StyledPanel>
            <Panel.Heading>
              Gift Card Disclosure
            </Panel.Heading>
            <Panel.Body>
              <p>
                The Giftly Gift Card is aredeemed for oney through the Giftly
                website. It is not accepted by any third-party merchant and is
                not covered by the CARD Act. Giftly Gift Cards never expire and
                there are no inactivity fees. Please see the Terms and
                Condidtions for the complete terms.
              </p>
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
