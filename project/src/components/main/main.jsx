import React from 'react';

import Promo from './promo/promo';
import Catalog from './catalog/catalog';
import PageFooter from '../page-footer/page-footer';

function Main() {
  return (
    <>
      <Promo />
      <div className="page-content">
        <Catalog />
        <PageFooter />
      </div>
    </>
  );
}

export default Main;
