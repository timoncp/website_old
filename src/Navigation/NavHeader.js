import React from 'react';
import Link from '../Navigation/Link';
import ArrowLeftSVG from '../Resources/svg_arrow_left';
import BurgerSVG from '../Resources/svg_burger';

import './NavHeader.css';

const NavHeader = (props) => {
  console.log(props.pageTitle);

  return (
    <div className='Page-NavHeader'>
      <div className='Page-NavHeader-BackButton'>
        <Link to='/'>
          <ArrowLeftSVG />
        </Link>
      </div>
      <h2 className='Page-Title' style={{
        textDecorationColor: props.pageTitleUnderlineColor
      }}>{props.pageTitle}</h2>
      <div className='Page-NavHeader-BurgerMenu'>
        <BurgerSVG />
      </div>
    </div>
  );
};

export default NavHeader;
