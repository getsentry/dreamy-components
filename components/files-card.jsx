import React from 'react';
import styled, {keyframes} from 'react-emotion';
import Card from './card';
import FileIconStack from './icon-file-stack';

const FileLine = ({filename, ...props}) => (
  <LineContainer {...props}>
    <FileIcon />
    <div>{filename}</div>
  </LineContainer>
);

const FileCard = props => (
  <Card {...props} priority="dark">
    <FileLine
      filename="api/endpoints/integrations.py"
    />
    <FileLine
      filename="src/events.py"
    />
    <FileLine
      filename="confs/server.py"
    />
    <FileLine
      filename="js/urls.js"
      noDelimiter={true}
    />
  </Card>
)

const LineContainer = styled('div')`
  border-bottom: ${p => !p.noDelimiter && `1px solid ${p.theme.purpleLightest}`};
  padding: 1.25em 1.5em 1.25em 1em;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 0.5em;
  align-items: center;
  color: ${p => p.theme.purpleLightest};
`;

const FileIcon = styled(FileIconStack)`
  width: 1.5em;
  fill: ${p => p.theme.purpleLightest};
`

export default FileCard;
