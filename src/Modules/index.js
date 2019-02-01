import Home from './Home';
import About from './About';
import PreviousWork from './PreviousWork';
import ReadingList from './ReadingList';

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
    path: '/previous-work',
    component: PreviousWork,
    name: 'Previous Work',
  },
  {
    path: '/reading',
    component: ReadingList,
    name: 'Reading List',
  },
];

export default [HomeModule].concat(GeneralModules);
