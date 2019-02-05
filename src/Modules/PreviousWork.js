import React from 'react';
import Link from '../Navigation/HashLink';

import './Page.css';

const separator = <span>¦</span>;

const PreviousWork = () => (
  <div className='Page-Container'>
    <div className='Page-Content'>
      <h4 className='heading' id='landscapp'>Some content</h4>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      <h4 className='heading' id='creditsuisse'>Some content</h4>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
      <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
    </div>
    <div className='Page-SideNav'>
      <Link to='/previous-work/#landscapp'
        activeClassName='Page-SideNav-ActiveHash'>
        Landscapp
      </Link>
      {separator}
      <Link to='/previous-work/#creditsuisse'
        activeClassName='Page-SideNav-ActiveHash'>
        CreditSuisse
      </Link>
      {separator}
      <Link to='/previous-work/#findie'
        activeClassName='Page-SideNav-ActiveHash'>
        Findie
      </Link>
      {separator}
      <Link to='/previous-work/#bearingpoint'
        activeClassName='Page-SideNav-ActiveHash'>
        bearingpoint
      </Link>
      {separator}
      <Link to='/previous-work/#sbu'
        activeClassName='Page-SideNav-ActiveHash'>
        Soft Business Union
      </Link>
    </div>
  </div>
);

export default PreviousWork;
