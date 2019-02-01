import React from 'react';
import { Link } from 'react-router-dom';

import './Link.css';

const CustomRouterLink = (props) =>
  <Link {...props} className='CustomRouterLink' />;

export default CustomRouterLink;
