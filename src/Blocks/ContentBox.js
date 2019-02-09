import React from 'react';
import TechIcon from '../Blocks/TechIcon';

import './ContentBox.css';

const ContentBox = (props) => (
  <div className='ContentBox-Container'>
    <h3 className='ContentBox-Heading' id={props.id}>{props.title}</h3>
    <div className='ContentBox-Content'>
      {props.children}
    </div>
    <div className='ContentBox-Technologies'>
      {props.techUsed.map(tech => <TechIcon name={tech} key={tech} />)}
    </div>
  </div>
);

export default ContentBox;
