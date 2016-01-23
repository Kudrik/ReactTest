import React, { Component, PropTypes } from 'react';
import './MainHeader.scss';

class MainHeader extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <h1 className='mainHeader'>{this.props.title}</h1>
    );
  }

}

export default MainHeader;
