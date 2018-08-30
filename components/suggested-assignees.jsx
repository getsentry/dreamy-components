import React from 'react';
import styled, {keyframes} from 'react-emotion';
import Avatar from './avatar';
import Issue from './issue';

const SuggestedAssignees = ({priority, ...props}) => (
  <Container {...props}>
    <StyledIssue description="E3fc2x" priority="error" triangleUp={true}/>
    <StyledAvatar top left src="https://sentry.io/_assets/people/matte-noble-98626d554cd2dcc6fbf5fba79428eb810c8ed7cb75da65baab550cb7d0d32061.jpg" />
    <StyledAvatar top middle src="https://sentry.io/_assets/people/meredith-9530c4a02bc5e6135f3eb4c731f704ae9456637fb98452d1c8b10a1f91f02014.jpg" />
    <StyledAvatar top right src="https://sentry.io/_assets/people/denamwangi-e522c9cae55e1a226b03e57bed5a27a44a92fe870fe2de0a6559a8fb4bdaece5.jpg" />
    <StyledAvatar bottom left src="https://sentry.io/_assets/people/colleenorourke-8b97c40b41b68e31097b8d3dbe21cbb53dd09d7b0034ef5c92c8b951ea6adfc5.jpg" />
    <StyledAvatar bottom middle src="https://sentry.io/_assets/people/benvinegar-28a3febe24d6cdac0ea9d896e3c16570b1c7b31083f08fa5d54f46e8df0e2bda.jpg" />
    <StyledAvatar bottom right src="https://sentry.io/_assets/people/adhiraj-5faa25498fde92382792066aa195c48ec5b4e2f7530ba4bcada1fd332bb86e98.jpg" />
  </Container>
)

const Container = styled('div')`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  position: relative;
`;

const StyledIssue = styled(Issue)`
  top: 50%;
  transform: translateY(60%);
  font-size: 0.875em;
`;

const getTransforms = p => {
  if (p.bottom && p.middle) return `0, -135%`;
  if (p.top && p.middle) return `0, 135%`
  if (p.top && p.right) return `-120%, 66%`
  if (p.top && p.left) return `-120%, -66%`
  if (p.bottom && p.right) return `120%, 66%`
  if (p.bottom && p.left) return `120%, -66%`
}

const StyledAvatar = styled(Avatar)`
  position: absolute;
  transform: translate(${getTransforms});
  width: 100%;
  height: 100%;
`;

export default SuggestedAssignees;
