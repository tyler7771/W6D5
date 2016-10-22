import React from 'react';
import Tabs from './tabs';

const tabs = [{title: "One", content:"We're in tab One"},
{title: "Two", content:"We're in tab Two"},
{title: "Three", content:"We're in tab Three"}];

const Root = () => {
  return (
  <div>
    <Tabs tabsInfo={tabs} />
  </div>
);
};


export default Root;
