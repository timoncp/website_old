import React from 'react';
import SocialIcon from '../Blocks/SocialIcon';

import './Home.css';

const Home = (props) => {
  return (
    <div className='Container'>
      <div className='PersonalCorner'>
        © Timon Carneci-Pröve, ca. 2019
      </div>
      {/* <div className='SocialCorner'>
        <SocialIcon
          name='github'
          label='@timoncp'
          url='https://github.com/timoncp'
        />
        <SocialIcon
          name='linkedIn'
          label={'Let\'s connect!'}
          url='https://www.linkedin.com/in/timoncp/'
        />
        <SocialIcon
          name='insta'
          label='@vanwhosville'
          url='https://www.instagram.com/vanwhosville/'
        />
        <SocialIcon
          name='twitter'
          label='@vanwhosville'
          url='https://twitter.com/vanwhosville'
        />
      </div> */}
      <div className='LeftSplit'>
        <h1 className='LeftSplit-Heading'>My name is Timon Carneci-Pröve and</h1>
        <h1 className='LeftSplit-Heading'>I build custom web solutions</h1>
        <h1 className='LeftSplit-Heading'>-- for you.</h1>
        {/* <span className='LeftSplit-SubHeading'>Full-Stack Developer</span>
        <p className='LeftSplit-Description'>Building custom web solutions for you - with passion.</p> */}
      </div>
    </div>
  );
}

export default Home;
