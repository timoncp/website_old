import Home from './Home';
import Dashboard from './Dashboard';
import OtherThings from './OtherThings';

const modules = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home',
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard',
  },
  {
    path: '/other_things',
    component: OtherThings,
    name: 'Other things',
  },
];

export default modules;
