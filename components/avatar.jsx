import React from 'react';
import styled from 'react-emotion';

const Avatar = ({src, borderless, ...props}) => {
  return (
    <Container {...props}>
      <ImageCropper borderless={borderless}>
        <ImageFill src={src} />
      </ImageCropper>
    </Container>
  )
}

const Container = styled('div')`
  width: ${p => p.size || "100%"};
  height: ${p => p.size || "100%"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  ${p => console.log(p)}
  background: ${p => p.priority ? p.theme.alert[p.priority].background : p.theme.gray1};
  overflow: hidden;
`;

const ImageCropper = styled('div')`
  width: ${p => p.borderless ? "100%" : "84%"};
  height: ${p => p.borderless ? "100%" : "84%"};
  border-radius: 50%;
  overflow: hidden;
`;

const ImageFill = styled('img')`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default Avatar;
