import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RestaurantSelectionList from './../RestaurantSelectionList';

const InputContainer = styled.div``;

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

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  handleOnNameChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const { name } = this.state;
    return (
      <InputContainer>
        <Input
          className="AddressForm__name-input"
          type="text"
          value={name}
          onChange={this.handleOnNameChange.bind(this)}
        />
        <RestaurantSelectionList restaurants={[]} />
      </InputContainer>
    );
  }
}

AddressInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default AddressInput;
