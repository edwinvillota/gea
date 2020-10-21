import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RedirectToLogin = () => {

  return (
    <Route render={() => {
      return <Redirect to='/login' />;
    }}
    />
  );
};

export default RedirectToLogin;
