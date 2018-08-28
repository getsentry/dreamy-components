import React from 'react';
import styled from 'react-emotion';

const Card = styled('div')`
  border-radius: 26px;
  display: flex;
  flex-direction: column;
  box-shadow: ${p => p.theme.dropShadowHeavy};
  background: ${p => p.priority ? p.theme.alert[p.priority].background : "#fff"};
  font-family: sans-serif;
  min-height: 100px;
`;

export default Card;
