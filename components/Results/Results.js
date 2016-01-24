import React, { Component, PropTypes } from 'react';
import './Results.scss';

class Results extends Component {

  static propTypes = {
    friends: PropTypes.number.isRequired,
    perfumes: PropTypes.number.isRequired
  };

  render() {
    return (
      <section className='results'>
        <h1>Watch your results</h1>
        <div className='container'>
          <div className='friends'>
            <h2>Friends subscribed:</h2>
            <p>{this.props.friends}</p>
          </div>
          <div className='perfumes'>
            <h2>Perfumes earned:</h2>
            <p>{this.props.perfumes}</p>
          </div>
        </div>
      </section>
    );
  }

}

export default Results;
