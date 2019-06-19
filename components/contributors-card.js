import React from 'react';
import styled, {keyframes} from 'react-emotion';
import theme from './theme';
import Badge from './badge';
import Card from './card';

const ContributorsLine = ({name, src, score, ...props}) => (
  <LineContainer {...props}>
    <StyledBadge name={name} src={src} />
    <LineChart score={score} />
    <LineNumber>{score}</LineNumber>
  </LineContainer>
);

const ContributorsCard = props => (
  <Card {...props}>
    <ContributorsLine
      name="Ben"
      src="https://sentryio-assets.storage.googleapis.com/img/avatars/6.jpg"
      score={4}
    />
    <ContributorsLine
      name="Kelly"
      src="https://sentryio-assets.storage.googleapis.com/img/avatars/4.jpg"
      score={11}
    />
    <ContributorsLine
      name="Meredith"
      src="https://sentryio-assets.storage.googleapis.com/img/avatars/1.jpg"
      score={8}
    />
    <ContributorsLine
      name="Adhiraj"
      src="https://sentryio-assets.storage.googleapis.com/img/avatars/7.jpg"
      score={6}
      noDelimiter={true}
    />
  </Card>
);

const expandOut = keyframes`
  0% {
    opacity: 0;
    transform-origin: left center;
    transform: scaleX(0.5);
  }

  100% {
    opacity: 1;
    transform-origin: left center;
    transform: scaleX(1);
  }
`;

const LineContainer = styled('div')`
  border-bottom: ${p => !p.noDelimiter && `1px solid ${theme.borderLight}`};
  padding: 1.25em 1.5em 1.25em 1em;
  display: grid;
  grid-template-columns: auto 1fr 2em;
  grid-column-gap: 1em;
  align-items: center;
`;

const StyledBadge = styled(Badge)`
  font-size: 0.875em;
`;

const LineChart = styled('div')`
  width: ${p => (p.score / 12) * 100}%;
  height: 6px;
  background: ${theme.green};
  border-radius: 10px;
  animation: 0.5s ${expandOut};
`;

const LineNumber = styled('div')`
  font-family: sans-serif;
  font-size: 0.875em;
  text-align: right;
  color: ${theme.green};
`;

export default ContributorsCard;
