import React from 'react';
import styled, {keyframes} from 'react-emotion';
import Card from './card';
import IconCircleChevron from './icon-circle-chevron';
import IconClose from './icon-close';
import theme from './theme';

const BashCard = ({children, header, ...props}) => (
  <StyledCard
    {...props}
    priority="dark"
    header={
      <HeaderContent style={{width: '98%'}}>
        <HeaderContent>
          <StyledIconCircleChevron />
          {header || 'Chrissy — Vim'}
        </HeaderContent>
        <StyledIconClose />
      </HeaderContent>
    }
  >
    {children || (
      <BashContent>
        <Green>Commit: Dc34EFrfs56Gs</Green>
        <br />
        Author: Chrissy
        <br />
        Date: Wed Jul 18
        <br />~<br />
        fix: Don’t fail.
        <br />
        <Orange>fixes SENTRY-5T4</Orange>
        <Cursor />
        <br />~<br />~<br />
      </BashContent>
    )}
  </StyledCard>
);

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const Cursor = styled('span')`
  background-color: ${theme.blueLight};
  display: inline-block;
  width: 2px;
  height: 1.2em;
  position: relative;
  transform: translate(0.25em, 0.25em);
  animation: 1s ${blink} infinite;
`;

const StyledCard = styled(Card)`
  background: #2f2837;
  width: 500px;
  margin: 0 auto;
`;

const Green = styled('span')`
  color: ${theme.green};
`;

const Orange = styled('span')`
  color: ${theme.yellowOrange};
`;

const BashContent = styled('p')`
  padding: 0.5em 1.5em;
  font-size: 0.85em;
  line-height: 1.5;
  font-weight: 600;
`;

const StyledIconCircleChevron = styled(IconCircleChevron)`
  height: 1.5em;
  color: ${theme.purpleLight};
  margin-right: 0.5em;
`;

const HeaderContent = styled('div')`
  color: ${theme.purpleLightest};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIconClose = styled(IconClose)`
  height: 1em;
  fill: ${theme.purpleLightest};
`;

export default BashCard;
