import React from 'react';
import ReactDOM from 'react-dom/server';
import {renderStylesToString} from 'emotion-server';
import fs from 'fs';

const files = [
  'bash-card',
  'resolution',
  'suggested-assignees',
  'emails',
  'issues',
  'contributors',
];

files.forEach(file => {
  const Component = require(`./components/${file}`);
  const html = renderStylesToString(ReactDOM.renderToString(<Component />));
  fs.writeFileSync(`./static_components/${file}.html`, html);
});
