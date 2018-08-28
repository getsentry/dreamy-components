import React from 'react';
import styled from 'react-emotion';
import Avatar from './avatar';

const Badge = ({name, src, ...props}) => {
  return (
    <Container {...props}>
      <StyledAvatar src={src} borderless={true}/>
      {name}
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-family: sans-serif;
  color: ${p => p.theme.gray4};
`;

const StyledAvatar = styled(Avatar)`
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.33em;
`;

export default Badge;
