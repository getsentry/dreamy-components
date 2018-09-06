import React from 'react';
import styled from 'react-emotion';
import theme from './theme';

const Avatar = ({src, ...props}) => {
  return (
    <Container {...props}>
      <ImageCropper>
        <ImageFill src={src} />
      </ImageCropper>
    </Container>
  );
};

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: ${p => (!p.borderless ? `3px solid ${theme.gray1}` : null)};
  overflow: hidden;
`;

const ImageCropper = styled('div')`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
`;

const ImageFill = styled('img')`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default Avatar;
