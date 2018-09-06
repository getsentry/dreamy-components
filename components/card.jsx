import React from 'react';
import styled from 'react-emotion';
import theme from './theme';

const Card = ({header, children, alternateHeaderColor, ...props}) => (
  <Container {...props} header={!!header}>
    {header && (
      <Header priority={props.priority} alternateHeaderColor={alternateHeaderColor}>
        {header}
      </Header>
    )}
    {children}
  </Container>
);

const Container = styled('div')`
  border-radius: 26px;
  display: flex;
  flex-direction: column;
  color: ${p => (!p.priority || p.priority == 'light' ? theme.gray7 : '#fff')};
  box-shadow: ${theme.dropShadowHeavy};
  background: ${p => (p.priority ? theme.alert[p.priority].background : '#fff')};
  font-family: sans-serif;
  min-height: 100px;

  ${p =>
    p.priority && p.priority !== 'light'
      ? `
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
  `
      : null};
`;

const getHeaderColor = p =>
  p.alternateHeaderColor ? theme[p.alternateHeaderColor] : theme.purple;

const Header = styled('div')`
  border-radius: 26px 26px 0 0;
  padding: 1.25em 1em 1em 1em;
  color: #fff;
  display: flex;
  font-size: 0.875em;
  align-items: center;
  background: ${p =>
    p.priority ? theme.alert[p.priority].background : getHeaderColor(p)};
  border-bottom: 1px solid ${p => (p.priority ? theme.alert[p.priority].border : '#fff')};

  ${p =>
    !p.priority || p.priority == 'light'
      ? `
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
  `
      : null};
`;

export default Card;
