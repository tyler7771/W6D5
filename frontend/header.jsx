import React from 'react';
import Tabs from './tabs';


const Header = ({ tabs, clickFunction }) => {
  return (<ul>
    {
      tabs.map( tabObject => (
        <li key={tabObject.index()} onClick={clickFunction.bind(null, tabObject)}>
          <h1>{tabObject.title}</h1>
        </li>
      ))
    }
  </ul>);
};

export default Header;
