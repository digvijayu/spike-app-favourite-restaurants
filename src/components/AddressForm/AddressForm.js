import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  appError,
  changeName,
  changeFavouriteFood,
  changeRating,
  locateRestaurant,
  addRestaurant
} from './../../store/restaurants/actions';

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

  handleOnAddClick() {
    this.props.addRestaurant();
  }

  render() {
    const {
      newRestaurant: { name, favouriteFood, rating, geoLocation }
    } = this.props;
    return (
      <div>
        <div>Address</div>
        <div>
          <input
            type="text"
            value={name}
            onChange={this.handleOnNameChange.bind(this)}
          />
        </div>
        <div>Favourite Food</div>
        <div>
          <input
            type="text"
            value={favouriteFood}
            onChange={this.handleOnFavouriteFoodChange.bind(this)}
          />
        </div>
        <div>Rating</div>
        <div>
          <input
            type="range"
            min="0"
            max="5"
            value={rating}
            onChange={this.handleOnRatingChange.bind(this)}
          />
        </div>
        <div>
          {!geoLocation && <button>Locate</button>}
          {geoLocation && (
            <button onClick={this.handleOnAddClick.bind(this)}>
              Add To Favourites
            </button>
          )}
        </div>
      </div>
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
  addRestaurant: () => dispatch(addRestaurant())
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AddressForm);
