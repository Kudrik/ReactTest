import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import './AffiliateScheme.scss';
import MainHeader from '../MainHeader';

class StoryItem extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    prependArrow: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };

  render() {
    const classes = cx(
      'storyItem',
      {[`prePoints-${this.props.prependArrow}`]: this.props.prependArrow != 'none'}
    ),
      image = {
      x: `/i/affiliateScheme/${this.props.image}.png`,
      xx: `/i/affiliateScheme/${this.props.image}.png, /i/affiliateScheme/${this.props.image}@2x.png 2x`
    };
    return (
      <li className={classes}>
        <figure className={this.props.image}>
          <picture>
            <source srcSet={image.xx} />
            <img src={image.x} srcSet={image.xx} alt={this.props.title} />
          </picture>
          <figcaption>{this.props.title}</figcaption>
          <p>{this.props.text}</p>
        </figure>
      </li>
    );
  }

}

class AffiliateScheme extends Component {

  render() {
    return (
      <div className='affiliateScheme'>
        <MainHeader title='free perfume for you and your friends' />
        <p>Give your friends a <strong>FREE</strong> perfume.</p>
        <p>Get a <strong>FREE</strong> perfume for every friend that subscribes.</p>
        <ul className='story'>
          <StoryItem title='Tell your friends' text='email, facebook or link' prependArrow='none' image='tell' />
          <StoryItem title='Your friends get free perfume' text='make them happy' prependArrow='up' image='freeperfume' />
          <StoryItem title='You get a FREE month' text='for every friend that subscribes' prependArrow='down' image='get' />
        </ul>
      </div>
    );
  }

}

export default AffiliateScheme;
