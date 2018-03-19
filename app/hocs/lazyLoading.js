import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => (
  <div />
);
const lazyLoading = loader => (
  Loadable({
    loader,
    loading: Loading,
  })
);

export default lazyLoading;
