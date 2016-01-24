import React, { Component } from 'react';
import './Terms.scss';

class Terms extends Component {

  render() {
    return (
      <section className='terms'>
        <h1>Terms of the program</h1>
        <div className='container'>
          <p>Offer valid for new subscribers only.</p>
          <p>You must be an active Scentbird subscriber to redeem.</p>
        </div>
      </section>
    );
  }

}

export default Terms;
