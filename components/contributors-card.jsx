import React from 'react';
import styled, {keyframes} from 'react-emotion';
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
      src="https://sentry.io/_assets/people/benvinegar-28a3febe24d6cdac0ea9d896e3c16570b1c7b31083f08fa5d54f46e8df0e2bda.jpg"
      score={4}
    />
    <ContributorsLine
      name="Jess"
      src="https://sentry.io/_assets/people/jessmacqueen-d3703f7a0aaf8b53330704b5f693ed3f9b907c53efeae485e3ce4c34aa55fbd4.jpg"
      score={11}
    />
    <ContributorsLine
      name="Chris"
      src="https://sentry.io/_assets/people/ckj-274e99b013127e748e6ea1e7d6cec774cf60609c7b19872abb984964fdca3604.jpg"
      score={8}
    />
    <ContributorsLine
      name="Dena"
      src="https://sentry.io/_assets/people/denamwangi-e522c9cae55e1a226b03e57bed5a27a44a92fe870fe2de0a6559a8fb4bdaece5.jpg"
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
  border-bottom: ${p => !p.noDelimiter && `1px solid ${p.theme.borderLight}`};
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
  background: ${p => p.theme.green};
  border-radius: 10px;
  animation: 0.5s ${expandOut};
`;

const LineNumber = styled('div')`
  font-family: sans-serif;
  font-size: 0.875em;
  text-align: right;
  color: ${p => p.theme.green};
`;

export default ContributorsCard;
