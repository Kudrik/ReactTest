import React, { Component } from 'react';
import AffiliateScheme from '../components/AffiliateScheme';
import PrizeCase from '../components/PrizeCase';
import InviteForm from '../components/InviteForm';
import Results from '../components/Results';
import Leaderboard from '../components/Leaderboard';
import Terms from '../components/Terms';
import data from '../static/data.json';

export default class extends Component {
  render() {
    const [friends, perfumes] = this._parseData(data);
    return (
      <div>
        <AffiliateScheme />
        <PrizeCase />
        <InviteForm />
        <Results friends={friends} perfumes={perfumes} />
        <Leaderboard data={data} />
        <Terms />
      </div>
    );
  }

  _parseData = (data) => {
    let friends = 0,
      perfumes = 0;
    data.map((obj) => {
      if (obj.isUser) perfumes = obj.referrals;
      if (obj.friend) friends++
    });
    return [friends, perfumes]
  }
}
