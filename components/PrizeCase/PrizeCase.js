import React, { Component, PropTypes } from 'react';
//import cx from 'classnames';
//import raf from '../../lib/requestAnimationFrame';
//import checkvisible from '../../lib/checkvisible';
import './PrizeCase.scss';


class PrizeCase extends Component {

  //constructor(props) {
  //  super(props);
  //  this.state = {'shown': false};
  //}

  render() {
    //const imgClasses = cx('prizeImg',{
    //  'shown': this.state.shown
    //});
    return (
      <div className='prizeCase'>
        <p>
          <strong>Top 3 Referrers </strong>
          of every week win<br />3 FREE Scentbird Colored Cases each
        </p>
      </div>
    );
  }

//<img ref={(elem) => this.callRaf(elem)} className={imgClasses} src="/i/PrizeCase/prize.png" srcSet="/i/PrizeCase/prize.png, /i/PrizeCase/prize@2x.png 2x" alt="Scentbird Colored Cases" />
  //callRaf(elem) {
  //  console.log(elem);
  //  console.log('added');
  //  console.log(checkvisible(elem));
  //  raf(() => {
  //    console.log('piu piu piu');
  //    //if (!this.state.shown) {
  //    //  this.setState({
  //    //    'shown': true
  //    //  })
  //    //}
  //  }, elem)
  //}
}

export default PrizeCase;
