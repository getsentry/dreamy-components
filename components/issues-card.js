import React from 'react';
import styled from 'react-emotion';
import Card from './card';
import Issue from './issue';
import theme from './theme';

const IssuesCard = ({priority, ...props}) => (
  <Card
    {...props}
    priority={priority}
    header={priority == 'success' ? 'Resolved Issues' : 'New Issues'}
  >
    <StyledIssue
      name="ResponseError"
      description="/api/0/projects/"
      priority={priority}
      animate={true}
    />
    <StyledIssue
      name="DataError"
      description="/extensions/github/web/"
      priority={priority}
      animate={true}
      animationDelay="0.15s"
    />
    <StyledIssue
      name="ValueTooLarge"
      description="/api/{project_id}/store/"
      priority={priority}
      animate={true}
      noDelimiter={true}
      animationDelay="0.3s"
    />
  </Card>
);

const StyledIssue = styled(Issue)`
  background: none;
  font-size: 0.875em;
  border-radius: 0;
  border-bottom: ${p =>
    !p.noDelimiter && `1px solid ${theme.alert[p.priority || 'error'].border}`};
  padding: 1.25em 1.5em 1.25em 1em;
`;

export default IssuesCard;
