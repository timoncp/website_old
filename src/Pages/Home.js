import React from 'react';
import InstaNavElement from '../Blocks/InstaNavElement';
import SocialIcon from '../Blocks/SocialIcon';

import './Home.css';

const Home = (props) => {
  return (
    <div className='Container'>
      <div className='PersonalCorner'>
        © Timon Carneci-Pröve, ca. 2019
      </div>
      <div className='SocialCorner'>
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
      </div>
      <div className='LeftSplit'>
        <h1 className='LeftSplit-Heading'>Timon Carneci-Pröve</h1>
        <span className='LeftSplit-SubHeading'>Web Application Developer</span>
        <p>And this is a paragraph</p>
      </div>
      <div className='RightSplit'>
        <InstaNavElement
          text='work philosophy'
          bgColor='blue'
          linkTo='work-philosophy'
        />
        <InstaNavElement
          text='web applications'
          bgColor='red'
          linkTo='web-applications'
        />
        <InstaNavElement
          text='data visualization'
          bgColor='yellow'
          linkTo='data-visualization'
        />
        <InstaNavElement
          text='previous work'
          bgColor='pink'
          linkTo='previous-work'
        />
      </div>
    </div>
  );
}

export default Home;
