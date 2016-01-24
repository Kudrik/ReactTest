import React, { Component, PropTypes } from 'react';
import './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div className="layout">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }

}

export default Layout;
