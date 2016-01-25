import React, { Component } from 'react';
import AffiliateScheme from '../components/AffiliateScheme';
import Terms from '../components/Terms';
import Link from '../components/Link';

export default class extends Component {
  render() {
    return (
      <div>
        <AffiliateScheme />
        <p style={{font:'25px / 40px "proxima_nova_light", "Helvetica", sans-serif', width: '700px', margin: '20px auto'}}>
          This page demonstrates ability of react-router. <br />
          Click the link and you will go to a new page without page reloading but keeping browser`s history (facebook style)<br />
          <Link to='/' href='/'>Your profile</Link>
        </p>
        <Terms />
      </div>
    );
  }
}
