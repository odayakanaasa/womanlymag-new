import React from 'react';
import Helmet from 'react-helmet';
import 'normalize.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Womanly Mag"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </div>
);

export default TemplateWrapper;
