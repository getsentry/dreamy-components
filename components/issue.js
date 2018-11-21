import React from 'react';
import styled, {keyframes} from 'react-emotion';
import isPropValid from '@emotion/is-prop-valid';
import IconCircleCheck from './icon-circle-check';
import IconCircleExclamation from './icon-circle-exclamation';
import theme from './theme';

const Issue = ({
  priority,
  triangleUp,
  name,
  description,
  shouldAnimate,
  delay,
  ...props
}) => {
  return (
    <StyledIssue {...props} priority={priority}>
      <div>
        {name && <IssueName>{name}</IssueName>}
        {description && <Description priority={priority}>{description}</Description>}
      </div>
      <StyledIcon priority={priority} shouldAnimate={shouldAnimate} delay={delay} />
      {triangleUp && <TriangleUp priority={priority} />}
    </StyledIssue>
  );
};

const StyledIssue = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0.5em 0.5em 1em;
  background: ${p => theme.alert[p.priority || 'error'].background};
  font-size: 1.2em;
  font-family: sans-serif;
  color: #fff;
  border-radius: 2em;
  margin-top: ${p => (p.triangleUp ? '0.5em' : null)};
  position: relative;
  -webkit-font-smoothing: antialiased;
`;

const Description = styled('span')`
  color: #fff;
`;

const IssueName = styled('span')`
  font-weight: bold;
  margin-right: 0.5em;
`;

const TriangleUp = styled('div')`
  width: 0;
  height: 0;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-bottom: 0.5em solid currentColor;
  position: absolute;
  left: 50%;
  bottom: 97%;
  transform: translateX(-50%);
`;

const growOut = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const StyledIcon = styled(
  ({priority, ...props}) =>
    priority == 'success' ? (
      <IconCircleCheck {...props} />
    ) : (
      <IconCircleExclamation {...props} />
    ),
  {shouldForwardProp: isPropValid}
)`
  height: 2em;
  width: 2em;
  margin-left: 0.5em;
  ${p => p.shouldAnimate && 'transform: scale(0.5);'} ${p =>
    p.shouldAnimate && 'opacity: 0;'}
  path {
    fill: #fff;
  }
  animation: ${p => p.shouldAnimate && `0.5s ${growOut} forwards`};
  animation-delay: ${p => p.delay};
`;

export default Issue;
