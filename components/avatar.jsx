import React from 'react';
import styled from 'react-emotion';
import IconCircleCheck from './icon-circle-check';
import IconCircleExclamation from './icon-circle-exclamation';

const Avatar = ({src, ...props}) => {
  return (
    <Container {...props}>
      <ImageCropper>
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
  width: 84%;
  height: 84%;
  border-radius: 50%;
  overflow: hidden;
`;

const ImageFill = styled('img')`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default Avatar;
