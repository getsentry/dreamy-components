import React from 'react';
import styled from 'react-emotion';
import Badge from './badge';
import Card from './card';
import IconMail from './icon-mail';
import theme from './theme';

const LineItem = ({name, src, message, ...props}) => (
  <LineContainer {...props}>
    <StyledBadge name={name} src={src} />
    <EmailMessage>{message}</EmailMessage>
  </LineContainer>
);

const ContributorsCard = ({hash, ...props}) => (
  <Card
    {...props}
    header={
      <React.Fragment>
        <StyledIconMail />
        Version {hash} was deployed to production
      </React.Fragment>
    }
  >
    <LineItem
      name="Ben"
      src="https://sentry.io/_assets/people/benvinegar-28a3febe24d6cdac0ea9d896e3c16570b1c7b31083f08fa5d54f46e8df0e2bda.jpg"
      message="Add ArrayJoin if nested column is present"
    />
    <LineItem
      name="Jess"
      src="https://sentry.io/_assets/people/jessmacqueen-d3703f7a0aaf8b53330704b5f693ed3f9b907c53efeae485e3ce4c34aa55fbd4.jpg"
      message="Add ability to reset querybuilder"
    />
    <LineItem
      name="Chris"
      src="https://sentry.io/_assets/people/ckj-274e99b013127e748e6ea1e7d6cec774cf60609c7b19872abb984964fdca3604.jpg"
      message="Fix aliases for tag columns"
      noDelimiter={true}
    />
  </Card>
);

const LineContainer = styled('div')`
  border-bottom: ${p => !p.noDelimiter && `1px solid ${theme.borderLight}`};
  padding: 1.25em 1.5em 1.25em 1em;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 0.5em;
  align-items: center;
`;

const StyledBadge = styled(Badge)`
  font-size: 0.875em;
  font-weight: 600;
  color: ${theme.gray3};
`;

const EmailMessage = styled('span')`
  color: ${theme.gray2};
  font-size: 0.875em;
`;

const StyledIconMail = styled(IconMail)`
  width: 1.5em;
  fill: #fff;
  margin-right: 0.5em;
`;

export default ContributorsCard;
