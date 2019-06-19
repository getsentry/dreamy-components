import React from 'react';
import styled, {keyframes} from 'react-emotion';
import isPropValid from '@emotion/is-prop-valid';
import Avatar from './avatar';
import Issue from './issue';
import theme from './theme';

const SuggestedAssignees = props => (
  <Container {...props}>
    <StyledIssue description="E3fc2x" priority="error" triangleUp={true} />
    <Avatars>
      <AvatarPackage
        top
        left
        src="https://sentry.io/_assets/people/matte-noble-98626d554cd2dcc6fbf5fba79428eb810c8ed7cb75da65baab550cb7d0d32061.jpg"
      />
      <AvatarPackage
        end
        top
        middle
        src="https://sentry.io/_assets/people/meredith-9530c4a02bc5e6135f3eb4c731f704ae9456637fb98452d1c8b10a1f91f02014.jpg"
      />
      <AvatarPackage
        top
        right
        src="https://sentry.io/_assets/people/zaralozano-4586555a2a6bb07088186ec538f09160ec4e2067dfd89fee34f0d1baee59bab7.jpg"
      />
      <AvatarPackage
        bottom
        left
        src="https://sentry.io/_assets/people/colleenorourke-8b97c40b41b68e31097b8d3dbe21cbb53dd09d7b0034ef5c92c8b951ea6adfc5.jpg"
      />
      <AvatarPackage
        start
        bottom
        middle
        src="https://sentry.io/_assets/people/benvinegar-28a3febe24d6cdac0ea9d896e3c16570b1c7b31083f08fa5d54f46e8df0e2bda.jpg"
      />
      <AvatarPackage
        bottom
        right
        src="https://sentry.io/_assets/people/adhiraj-5faa25498fde92382792066aa195c48ec5b4e2f7530ba4bcada1fd332bb86e98.jpg"
      />
    </Avatars>
  </Container>
);

const rotation = (operator = 1) => keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(${180 * operator}deg);
  }
  50% {
    transform: rotate(${180 * operator}deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const getAvatarAnimation = p => {
  const startColor = p.startingElement ? theme.green : theme.gray1;
  const endColor = p.startingElement ? theme.gray1 : theme.green;
  const startSize = p.startingElement ? 1.1 : 1;
  const endSize = p.startingElement ? 1 : 1.1;

  return keyframes`
    0% {
      border-color: ${startColor};
      transform: scale(${startSize}) rotate(0deg);
    }
    10% {
      border-color: ${endColor};
      transform: scale(${startSize}) rotate(-180deg);
    }
    23% {
      transform: scale(${endSize}) rotate(-180deg);
    }
    50% {
      border-color: ${endColor};
      transform: scale(${endSize}) rotate(-180deg);
    }
    60% {
      border-color: ${startColor};
      transform: scale(${endSize}) rotate(0deg);
    }
    70% {
      border-color: ${startColor};
      transform: scale(${startSize}) rotate(0deg);
    }
    100% {
      border-color: ${startColor};
      transform: scale(${startSize}) rotate(0deg);
    }
  `;
};

const getIssueAnimation = () => keyframes`
  0% {
    background: ${theme.red};
    color: ${theme.red};
  }
  10% {
    background: ${theme.red};
    color: ${theme.red};
  }
  15% {
    background: ${theme.green};
    color: ${theme.green};
  }
  50% {
    background: ${theme.green};
    color: ${theme.green};
  }
  51% {
    background: ${theme.red};
    color: ${theme.red};
  }
  60% {
    background: ${theme.red};
    color: ${theme.red};
  }
  65% {
    background: ${theme.green};
    color: ${theme.green};
  }
  100% {
    background: ${theme.green};
    color: ${theme.green};
  }
`;

const Container = styled('div')`
  margin: 9em;
  position: relative;
  transform-origin: center center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Avatars = styled('div')`
  width: 70px;
  height: 70px;
  position: relative;
  animation: 10s ${rotation()} infinite;
`;

const StyledIssue = styled(Issue)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.875em;
  animation: 10s ${p => getIssueAnimation(p)} infinite;
`;

const getTransforms = p => {
  if (p.bottom && p.middle) return `0, -150%`;
  if (p.top && p.middle) return `0, 150%`;
  if (p.top && p.right) return `-150%, 75%`;
  if (p.top && p.left) return `-150%, -75%`;
  if (p.bottom && p.right) return `150%, 75%`;
  if (p.bottom && p.left) return `150%, -75%`;
};

const StyledAvatar = styled(Avatar, {shouldForwardProp: isPropValid})`
  position: absolute;
  animation: 10s ${rotation(-1)} infinite
    ${p =>
      (p.startingElement || p.endingElement) &&
      `, 10s ${getAvatarAnimation(p)} infinite`};
  width: 70px;
  height: 70px;
`;

const AvatarWrapper = styled('div', {shouldForwardProp: isPropValid})`
  transform: translate(${getTransforms});
  width: 70px;
  height: 70px;
  position: absolute;
`;

const AvatarPackage = ({src, start, end, ...props}) => (
  <AvatarWrapper {...props}>
    <StyledAvatar src={src} startingElement={start} endingElement={end} />
  </AvatarWrapper>
);

export default SuggestedAssignees;
