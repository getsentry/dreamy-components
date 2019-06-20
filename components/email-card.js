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
        New Release! Version {hash} was deployed
      </React.Fragment>
    }
  >
    <LineItem
      name="Ben"
      src="https://sentryio-assets.storage.googleapis.com/img/avatars/6.jpg"
      message="Add ArrayJoin if nested column is present"
    />
    <LineItem
      name="Kelly"
      src="https://sentryio-assets.storage.googleapis.com/img/avatars/4.jpg"
      message="Add ability to reset querybuilder"
    />
    <LineItem
      name="Meredith"
      src="https://sentryio-assets.storage.googleapis.com/img/avatars/1.jpg"
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
