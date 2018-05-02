import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

export default class Home extends React.Component {
  render() {
    const HomeContainer = styled.div`
      display: flex;
      height: calc(100vh - 80px);
      justify-content: center;
      align-items: center;
    `;
    return (
      <HomeContainer>This is the home component of a massively chill portfolio website.</HomeContainer>
    )
  }
}
