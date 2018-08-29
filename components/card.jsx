import React from 'react';
import styled from 'react-emotion';

const Card = ({header, children, ...props}) => (
  <Container {...props} header={!!header}>
    {header && <Header priority={props.priority}>{header}</Header>}
    {children}
  </Container>
);

const Container = styled('div')`
  border-radius: 26px;
  display: flex;
  flex-direction: column;
  color: ${p => (!p.priority || p.priority == 'light') ? p.theme.gray7 : "#fff"};
  box-shadow: ${p => p.theme.dropShadowHeavy};
  background: ${p => p.priority ? p.theme.alert[p.priority].background : "#fff"};
  font-family: sans-serif;
  min-height: 100px;

  ${p => (p.priority && p.priority !== 'light') ? `
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
  ` : null}
`;

const Header = styled('div')`
  border-radius: 26px 26px 0 0;
  padding: 0.75em 1em;
  color: #fff;
  display: flex;
  align-items: center;
  background: ${p => p.priority ? p.theme.alert[p.priority].background : p.theme.purple};
  border-bottom: 1px solid ${p => p.priority ? p.theme.alert[p.priority].border : "#fff"};

  ${p => (!p.priority || p.priority == 'light') ? `
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
  ` : null}
`;

export default Card;
