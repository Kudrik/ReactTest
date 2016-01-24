/**
 * Test for Scentbird by kudrik.ru@gmail.com
 */

import React, { Component, PropTypes } from 'react';
import { title, description } from '../../config';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string.isRequired,
    debug: PropTypes.bool.isRequired
  };

  render() {
    return (
      <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title || title}</title>
        <meta name="description" content={this.props.description || description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <script src={'/app.js?' + new Date().getTime()}></script>
      </head>
      <body style={{visibility:'hidden'}}>
        <div id="app" dangerouslySetInnerHTML={{__html: this.props.body}} />
      </body>
      </html>
    );
  }

}

export default Html;
