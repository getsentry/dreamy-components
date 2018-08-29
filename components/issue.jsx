import React from 'react';
import styled, {keyframes} from 'react-emotion';
import IconCircleCheck from './icon-circle-check';
import IconCircleExclamation from './icon-circle-exclamation';

const Issue = ({priority, triangleUp, name, description, animate, animationDelay, ...props}) => {
  return (
    <StyledIssue {...props} priority={priority}>
      <div>
        {name && <IssueName>{name}</IssueName>}
        {description && <Description priority={priority}>{description}</Description>}
      </div>
      <StyledIcon priority={priority} animate={animate} animationDelay={animationDelay} />
      {triangleUp && <TriangleUp priority={priority} />}
    </StyledIssue>
  )
}

const StyledIssue = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0.5em 0.5em 1em;
  background: ${p => p.theme.alert[p.priority || 'error'].background};
  font-size: 1.2em;
  font-family: sans-serif;
  color: #fff;
  border-radius: 2em;
  margin-top: ${p => p.triangleUp ? "0.5em" : null};
  position: relative;
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
`;

const Description = styled('span')`
  color: ${p => p.theme.alert[p.priority || 'error'].backgroundLight};
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
  border-bottom: 0.5em solid ${p => p.theme.alert[p.priority || 'error'].background};
  position: absolute;
  left: 50%;
  bottom: 100%;
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

const StyledIcon = styled(({priority, ...props}) => (priority == 'success') ? <IconCircleCheck {...props} /> : <IconCircleExclamation  {...props} />)`
  height: 2em;
  width: 2em;
  margin-left: 0.5em;
  transform: scale(0.5);
  opacity: 0;

  animation: ${p => p.animate && `0.5s ${growOut} forwards`};
  animation-delay: ${p => p.animationDelay};
`;

export default Issue;
