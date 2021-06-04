import React from 'react';

import Logo from '../page-header/logo/logo';

function PageFooter() {
  return (
    <footer className="page-footer">
      <Logo footer/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default PageFooter;
