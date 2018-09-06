import React from 'react';
import ReactDOM from 'react-dom/server';
import {renderStylesToString} from 'emotion-server';
import {ThemeProvider} from 'emotion-theming';
import fs from 'fs';

import Theme from './components/theme.jsx';
import BashCard from './components/bash-card.jsx';

const testHtml = renderStylesToString(
  ReactDOM.renderToString(
    <ThemeProvider theme={Theme}>
      <BashCard />
    </ThemeProvider>
  )
);
fs.writeFileSync('./test.html', testHtml);
