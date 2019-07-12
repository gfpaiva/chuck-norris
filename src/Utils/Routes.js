import {
  Home,
  NotFound,
} from '../Pages';

const Routes = [
  {
    exact: true,
    path: '/',
    component: Home,
    key: 'home',
  },
  {
    exact: true,
    component: NotFound,
    key: 'notfound',
  },
];

export default Routes;
