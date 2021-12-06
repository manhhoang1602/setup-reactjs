import React from 'react';
import Dashboard from '../modules/dashboad/Dashboard';
import { Route, Switch } from 'react-router-dom';

export const ADMIN_ROUTER = {
  DASHBOARD: {
    path: '/dashboard',
    component: Dashboard,
  },
};

const AdminRouter: React.FC = () => {
  let arrAdminRouter = Object.values(ADMIN_ROUTER);
  return (
    <Switch>
      {arrAdminRouter.map((value: any) => (
        <Route key={value.path} exact path={value.path} component={value.component} />
      ))}
    </Switch>
  );
};

export default AdminRouter;
