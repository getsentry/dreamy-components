import React from 'react';
import styled, {keyframes} from 'react-emotion';
import Card from './card';
import IconCircleChevron from './icon-circle-chevron';
import IconClose from './icon-close';

const BashCard = props => (
  <StyledCard {...props} priority="dark" header={(
    <HeaderContent style={{width: "98%"}}>
      <HeaderContent>
        <StyledIconCircleChevron/> Chrissy — Vim
      </HeaderContent>
      <StyledIconClose />
    </HeaderContent>
  )}>
    <BashContent>
      <Green>Commit: Dc34EFrfs56Gs</Green><br/>
      Author: Chrissy<br/>
      Date: Wed Jul 18<br/>
      ~<br/>
      	fix: Don’t fail.<br/>
      	<Orange>fixes SENTRY-5T4</Orange><br/>
      ~<br/>
      ~<br/>
    </BashContent>
  </StyledCard>
)

const StyledCard = styled(Card)`
  background: #2F2837;
  width: 500px;
`;

const Green = styled('span')`
  color: ${p => p.theme.green};
`;

const Orange = styled('span')`
  color: ${p => p.theme.yellowOrange};
`;

const BashContent = styled('p')`
  padding: 0.5em 1.5em;
  font-size: 0.85em;
  line-height: 1.5;
  font-weight: 600;
`;

const StyledIconCircleChevron = styled(IconCircleChevron)`
  height: 1.5em;
  color: ${p => p.purpleLight};
  margin-right: 0.5em;
`;

const HeaderContent = styled('div')`
  color: ${p => p.theme.purpleLightest};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIconClose = styled(IconClose)`
  height: 1em;
  fill: ${p => p.theme.purpleLightest};
`;

export default BashCard;
