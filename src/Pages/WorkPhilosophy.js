import React from 'react';
import NavHeader from '../Navigation/NavHeader';

import './Page.css';

const WorkPhilosophy = () => (
  <div className='Page-Container'>
    <NavHeader
      pageTitle='work philosophy'
      pageTitleUnderlineColor='#42c8f4'
    />
    <div className='Page-Content'>
      <p>I am here to design, develop and deploy web applications of small to medium sizes, averaging a time-to-production between 2 and 6 months. I tend to work quickly and alone, with flexible development cycles that allow me to get feedback to you as quickly as possible. And for the love of god, I don’t do dailies. Do people not schedule calls anymore? What’s wrong with calls?</p>
      <p>Yes, I can get it all done by myself, otherwise I wouldn’t be offering this as my service. I wasted too much time in unproductive teams, under inefficient leadership. It’s not that I’m a bad team player, but the more bureaucracy you add, the slower the process and the stronger the headache.</p>
      <p>I don’t charge by hour, I charge a flat rate for the whole project, after agreeing on a project timeline and analysing the application complexity. Having a concrete deadline when you want your project finished allows you to not think about hours on your bill vs what the developer you hired did during this time. It also allows me to schedule my time the way I know to work best (read more about that here), and leaves the pressure of hitting the deadline or going over budget up to me.</p>
      <p>My primary priority is to deliver something you want and need, rather than building something I think you might need. If you want me to advise you at times on which design/approach/solution I consider to be best, I have no issue helping you out that way as well. Whichever kind of the two you are, I have worked with both extensively. Just let me know what your preferred approach is and I’ll tailor myself to that. We both know very well how much frustration and energy can be saved through transparent communication.</p>
    </div>
  </div>
);

export default WorkPhilosophy;
