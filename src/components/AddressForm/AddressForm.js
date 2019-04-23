import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  appError,
  changeName,
  changeFavouriteFood,
  changeRating,
  locateRestaurant,
  addRestaurant
} from './../../store/restaurants/actions';
import { loadLocationThunk } from './../../store/restaurants/thunk';

const Form = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
`;

const Input = styled.input`
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  background: #fff;
  border: 2px solid #ccc;
  padding: 0.5rem;
  color: #555;
  font-size: 1rem;

  &:hover {
    border: 2px solid #aaa;
  }

  &:focussed {
    border: 2px solid #aaa;
  }
`;

const Label = styled.div`
  font-weight: bold;
  font-size: 0.7rem;
`;

const InputContainer = styled.div`
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  background: #60a3bc;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  display: inline-block;
  border: none;
  cursor: pointer;

  &:hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

class AddressForm extends Component {
  handleOnNameChange(e) {
    this.props.changeName(e.target.value);
  }

  handleOnFavouriteFoodChange(e) {
    this.props.changeFavouriteFood(e.target.value);
  }

  handleOnRatingChange(e) {
    this.props.changeRating(e.target.value);
  }

  handleOnLoadClick() {
    this.props.loadGeoLocation(this.props.newRestaurant.name);
  }

  handleOnAddClick() {
    this.props.addRestaurant();
  }

  render() {
    const {
      newRestaurant: { name, favouriteFood, rating, geoLocation }
    } = this.props;
    return (
      <Form>
        <InputContainer>
          <Label>Address</Label>
          <div>
            <Input
              type="text"
              value={name}
              onChange={this.handleOnNameChange.bind(this)}
            />
          </div>
        </InputContainer>
        <InputContainer>
          <Label>Favourite Food</Label>
          <div>
            <Input
              type="text"
              value={favouriteFood}
              onChange={this.handleOnFavouriteFoodChange.bind(this)}
            />
          </div>
        </InputContainer>
        <InputContainer>
          <Label>Rating</Label>
          <div>
            <Input
              type="range"
              min="0"
              max="5"
              value={rating}
              onChange={this.handleOnRatingChange.bind(this)}
            />
          </div>
        </InputContainer>
        <div>
          {!geoLocation && (
            <Button onClick={this.handleOnLoadClick.bind(this)}>Locate</Button>
          )}
          {geoLocation && (
            <Button onClick={this.handleOnAddClick.bind(this)}>
              Add To Favourites
            </Button>
          )}
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  newRestaurant: state.restaurants.newRestaurant
});

const mapActionsToProps = dispatch => ({
  appError: err => dispatch(appError(err)),
  changeName: name => dispatch(changeName(name)),
  changeFavouriteFood: favouriteFood =>
    dispatch(changeFavouriteFood(favouriteFood)),
  changeRating: rating => dispatch(changeRating(rating)),
  locateRestaurant: () => dispatch(locateRestaurant()),
  addRestaurant: () => dispatch(addRestaurant()),
  loadGeoLocation: address => loadLocationThunk(address)(dispatch)
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AddressForm);
