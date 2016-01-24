import React, { Component } from 'react';
import AffiliateScheme from '../components/AffiliateScheme';
import PrizeCase from '../components/PrizeCase';
import InviteForm from '../components/InviteForm';
import Results from '../components/Results';

export default class extends Component {

  render() {
    return (
      <div>
        <AffiliateScheme />
        <PrizeCase />
        <InviteForm />
        <Results friends={1} perfumes={1} />
      </div>
    );
  }

}
