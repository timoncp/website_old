import React from 'react';
import ContentBox from '../Blocks/ContentBox';
import NavHeader from '../Navigation/NavHeader';

import './Page.css';

const About = () => (
  <div className='Page-Container'>
    <NavHeader
      pageTitle='about'
      pageTitleUnderlineColor='#ba3985'
    />
    <div className='Page-Content'>
      <ContentBox id='landscapp' title='Landscapp'
        techUsed={['javascript', 'react', 'nodejs', 'express', 'mocha', 'html', 'css', 'mongodb', 'nginx', 'docker', 'aws']}>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      </ContentBox>
      <ContentBox id='creditsuisse' title='CreditSuisse' techUsed={['javascript', 'nodejs']}>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      </ContentBox>
      <ContentBox id='findie' title='Findie' techUsed={['javascript', 'nodejs']}>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      </ContentBox>
      <ContentBox id='bearingpoint' title='BearingPoint' techUsed={['javascript', 'nodejs']}>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      </ContentBox>
      <ContentBox id='sbu' title='Soft Business Union' techUsed={['javascript', 'nodejs']}>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
        <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      </ContentBox>
    </div>
  </div>
);

export default About;
