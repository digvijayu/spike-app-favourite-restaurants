import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loadLocationThunk } from './../../store/restaurants/thunk';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const InputContainer = styled.div`
  input {
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

    .google-places-autocomplete__suggestion {
      cursor: pointer;
    }
  }
`;

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  handleOnNameChange(location) {
    this.props.loadLocations(location.description);
    this.props.onChange(location.description);
  }

  render() {
    const { name } = this.state;
    return (
      <InputContainer>
        <GooglePlacesAutocomplete
          initialValue={name}
          onSelect={this.handleOnNameChange.bind(this)}
        />
      </InputContainer>
    );
  }
}

AddressInput.propTypes = {
  name: PropTypes.string,
  loadLocations: PropTypes.func,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  name: state.restaurants.newRestaurant.name
});

const mapActionsToProps = dispatch => ({
  loadLocations: name => loadLocationThunk(name)(dispatch)
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AddressInput);
