import React from 'react';
import InstaTextBox from '../Blocks/InstaTextBox';
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
      <div className='Navigation'>
        <h1 className='Heading' id='homepage-handle'>
          {'@vanwhosville'}
        </h1>
        <div className='NavBlocks'>
          <InstaTextBox
            text='work philosophy'
            bgColor='blue'
            linkTo='work-philosophy'
          />
          <InstaTextBox
            text='web applications'
            bgColor='red'
            linkTo='web-applications'
          />
          <InstaTextBox
            text='data visualization'
            bgColor='yellow'
            linkTo='data-visualization'
          />
          <InstaTextBox
            text='previous work'
            bgColor='pink'
            linkTo='previous-work'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
