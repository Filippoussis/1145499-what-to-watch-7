import React from 'react';

import Logo from '../page-header/logo/logo';
import Copyright from './copyright/copyright';

function PageFooter() {
  return (
    <footer className="page-footer">
      <Logo footer/>
      <Copyright />
    </footer>
  );
}

export default PageFooter;
