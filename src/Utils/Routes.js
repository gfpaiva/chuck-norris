import {
  Home,
  NotFound,
  Fact,
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
    path: '/category/:category',
    component: Fact,
    key: 'fact',
  },
  {
    exact: true,
    component: NotFound,
    key: 'notfound',
  },
];

export default Routes;
