import React, { Component } from 'react';
import AffiliateScheme from '../components/AffiliateScheme';
import PrizeCase from '../components/PrizeCase';
import InviteForm from '../components/InviteForm';

export default class extends Component {

  render() {
    return (
      <div>
        <AffiliateScheme />
        <PrizeCase />
        <InviteForm />
      </div>
    );
  }

}
