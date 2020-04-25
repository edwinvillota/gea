import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RedirectToApp = () => {

  return (
    <Route render={() => {
      return <Redirect to='/app' />;
    }}
    />
  );
};

export default RedirectToApp;
