import React from 'react';
import styled, {keyframes} from 'react-emotion';
import Card from './card';
import Issue from './issue';

const IssuesCard = ({priority, ...props}) => (
  <Card {...props} priority={priority} header={(priority == 'success') ? "Resolved Issues" : "New Issues"}>
    <StyledIssue name="ResponseError" description="/api/0/projects/" priority={priority}/>
    <StyledIssue name="DataError" description="/extensions/github/web/" priority={priority}/>
    <StyledIssue name="ValueTooLarge" description="/api/{project_id}/store/" priority={priority} noDelimiter={true}/>
  </Card>
)

const StyledIssue = styled(Issue)`
  background: none;
  font-size: 0.875em;
  border-radius: 0;
  border-bottom: ${p => !p.noDelimiter && `1px solid ${p.theme.alert[p.priority || 'error'].border}`};
  padding: 1em 1.5em 1em 1em;
`;

export default IssuesCard;
