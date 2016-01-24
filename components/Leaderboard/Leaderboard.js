import React, { Component, PropTypes } from 'react'
import Immutable from 'immutable'
import { VirtualScroll } from 'react-virtualized'
import shouldPureComponentUpdate from 'react-pure-render/function'
import cx from 'classnames'
import raf from 'raf'
import "./Leaderboard.scss"

class Leaderboard extends Component {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    return (
      <section className='leaderboard'>
        <h1>Leaderboard</h1>
        <LeaderboardTable list={Immutable.List(this.props.data)} />
      </section>
    );
  }

}

class LeaderboardTable extends Component {

  shouldComponentUpdate = shouldPureComponentUpdate;

  static propTypes = {
    list: PropTypes.instanceOf(Immutable.List).isRequired
  };

  constructor (props) {
    super(props);

    this.currentRows = {};
    this.state = {
      rowsCount: props.list.size,
      scrollToIndex: undefined,
      virtualScrollHeight: 300,
      virtualScrollRowHeight: 30
    };
    this.rowsPerPage = this.state.virtualScrollHeight / this.state.virtualScrollRowHeight | 0;
  }

  render () {
    const {
      rowsCount,
      scrollToIndex,
      virtualScrollHeight,
      virtualScrollRowHeight
      } = this.state;

    return (
      <div className='leaderTable'>
        <div className='caption row'>
          <div className='ind'>
          </div>
          <div className='name'>
            Name
          </div>
          <div className='referrals'>
            Referrals
          </div>
        </div>
        <VirtualScroll
          ref='VirtualScroll'
          className='virtualScroll'
          height={virtualScrollHeight}
          noRowsRenderer={this._noRowsRenderer}
          rowsCount={rowsCount}
          rowHeight={virtualScrollRowHeight}
          rowRenderer={this._rowRenderer}
          scrollToIndex={scrollToIndex}
          onRowsRendered={((obj) => {this.currentRows = obj})}
          />
        {this._controls()}
      </div>
    );
  }

  _controls = () => {
    const pagesNum = Math.ceil(this.state.rowsCount / this.rowsPerPage);
    let pages = [];
    for(let i = 1; i <= pagesNum; i++) {
      pages.push(<span onClick={this._jump} key={i}>{i}</span>)
    }

    return (
      <div className='controls'>
        <span onClick={this._jumpUp}>&lt; prev</span>
        {pages}
        <span onClick={this._jumpDown}>next &gt;</span>
      </div>
    )
  };

  _noRowsRenderer = () => {
    return (
      <div>
        No rows
      </div>
    )
  };

  _jump = (e) =>{
    console.log(e.target.innerText);
    this._jumpTo(parseInt(e.target.innerText, 10)*10 - 1);
    raf((() => {this._jumpTo(parseInt(e.target.innerText, 10)*10 - this.rowsPerPage)}));
  };

  _jumpUp = () => {
    this._jumpTo(this.currentRows.startIndex - this.rowsPerPage);
  };

  _jumpDown = () => {
    this._jumpTo(this.currentRows.stopIndex + this.rowsPerPage);
  };

  _jumpTo = (scrollToIndex) => {
    const { rowsCount } = this.state;

    if (isNaN(scrollToIndex) || scrollToIndex < 0) {
      scrollToIndex = 0
    } else if (scrollToIndex > rowsCount) {
      scrollToIndex = rowsCount - 1
    }
    console.log(scrollToIndex);
    this.setState({ scrollToIndex })
  };

  _rowRenderer = (index) => {
    const { list } = this.props,
      datum = list.get(index),
      rowClasses = cx('row',{
        you: datum.isUser
      });

    return (
      <div className={rowClasses}>
        <div className='ind'>
          {index + 1}
        </div>
        <div className='name'>
          {index <= 2 &&
          <span className='winnerIco' title='Will get free 3 cases'></span>
          }
          {datum.friend &&
          <span className='friendIco' title='Your friend'></span>
          }
          {datum.isUser ? 'You' : `${datum.name} ${datum.surname}`}
        </div>
        <div className='referrals'>
          {datum.referrals}
        </div>
      </div>
    )
  };

}

export default Leaderboard;
