import React from 'react';
import ReactDOM from 'react-dom/server';
import {renderStylesToString} from 'emotion-server';
import {ThemeProvider} from 'emotion-theming';
import fs from 'fs';

import Theme from './components/theme.jsx';

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
  const html = renderStylesToString(
    ReactDOM.renderToString(
      <ThemeProvider theme={Theme}>
        <Component />
      </ThemeProvider>
    )
  );
  fs.writeFileSync(`./static_components/${file}.html`, html);
});
