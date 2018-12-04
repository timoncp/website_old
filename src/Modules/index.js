import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import PreviousWork from './PreviousWork';
import ProductivitySystem from './ProductivitySystem';
import ReadingList from './ReadingList';
import SnakeGame from './SnakeGame.js';

export const HomeModule = {
  path: '/',
  exact: true,
  component: Home,
  name: 'Home',
};

export const GeneralModules = [
  {
    path: '/about',
    component: About,
    name: 'About',
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard',
  },
  {
    path: '/previous_work',
    component: PreviousWork,
    name: 'Previous Work',
  },
  {
    path: '/productivity',
    component: ProductivitySystem,
    name: 'Productivity System',
  },
  {
    path: '/reading',
    component: ReadingList,
    name: 'Reading List',
  },
  {
    path: '/snake',
    component: SnakeGame,
    name: 'Snake Game',
  },
];

export default [HomeModule].concat(GeneralModules);
