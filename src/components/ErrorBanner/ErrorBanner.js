import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ErrorBannerContainer = styled.div`
  background: #ff9494;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem;
`;

class ErrorBanner extends Component {
  render() {
    const {
      error: { message }
    } = this.props;

    if (!message) return <></>;

    return <ErrorBannerContainer>{message}</ErrorBannerContainer>;
  }
}

const mapStateToProps = state => ({
  error: state.restaurants.error
});

export default connect(
  mapStateToProps,
  {}
)(ErrorBanner);
