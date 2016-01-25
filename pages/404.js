import React, { Component } from 'react';
import AffiliateScheme from '../components/AffiliateScheme';
import Terms from '../components/Terms';
import Link from '../components/Link';

export default class extends Component {

  render() {
    return (
    <div>
      <AffiliateScheme />
      <h1>Not Found</h1>
      <p>
        The page you're looking for was not found.<br />
        <Link to='/' href='/'>Your profile</Link>
      </p>
      <Terms />
    </div>
    );
  }

}
