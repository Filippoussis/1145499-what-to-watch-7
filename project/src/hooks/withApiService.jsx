import React from 'react';
import {ApiServiceConsumer} from '../components/api-service-context/api-service-context';

const withApiService = (Component) => (props) => (
  <ApiServiceConsumer>
    {
      (apiService) => <Component {...props} apiService={apiService} />
    }
  </ApiServiceConsumer>
);

export default withApiService;