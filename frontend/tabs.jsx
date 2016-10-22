import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {selected: 0};

  }

  content () {
    return this.props.tabsInfo[this.state.selected].content;
  }

  handleClick (newIdx) {
    this.setState({selected: newIdx});
  }

  render() {
    // debugger
    return(
      <div>
        <Header tabs={this.props.tabsInfo} clickFunction={this.handleClick}/>
        <article>{this.content()}</article>
      </div>
    );
  }
}

export default Tabs;
