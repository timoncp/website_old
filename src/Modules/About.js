import React from 'react';
import genericPage from './GenericPageTemplate';

const About = () => (
  <>
    <h4 className='heading'>Some content</h4>
    <p>Blac asdfionasfon asodifnsoidnf asodifnsdof</p>
  </>
);

export default genericPage(About, 'About');
