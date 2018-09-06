import React from 'react';
import styled from 'react-emotion';

const Avatar = ({src, borderless, ...props}) => {
  return (
    <Container {...props}>
      <ImageCropper borderless={borderless}>
        <ImageFill src={src} />
      </ImageCropper>
    </Container>
  );
};

const Container = styled('div')`
  width: ${p => p.size || '100%'};
  height: ${p => p.size || '100%'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: ${p => (!p.borderless ? `4px solid ${p.theme.gray1}` : null)};
  overflow: hidden;
`;

const ImageCropper = styled('div')`
  width: ${p => (p.borderless ? '100%' : '90%')};
  height: ${p => (p.borderless ? '100%' : '90%')};
  border-radius: 100%;
  overflow: hidden;
`;

const ImageFill = styled('img')`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default Avatar;
