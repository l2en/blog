import React, { Component, Fragment } from 'react';
import './index.scss';

class Header extends Component {
  render() {
    const style = {
      width: '32px',
      height: '32px'
    }
    return (
      <Fragment>
        <header className='header'>
          <div className='header-left'>
            <svg class="icon mr-15" style={style} aria-hidden="true">
              <use href="#icon-github"></use>
            </svg>
            <label className='header-left-searchWrapper mr-10'>
              <input className='header-left-search' />
              <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2" />
            </label>
            <div className='header-left-item'>
              <a href='javascript:void(0)'>Pull request</a>
              <a href='javascript:void(0)'>Issues</a>
              <a href='javascript:void(0)'>Marketplace</a>
              <a href='javascript:void(0)'>Explore</a>
            </div>
          </div>
          <div className='header-right ml-35'>
            <span className='header-right-item'>
              <svg class="icon header-right-bell" aria-hidden="true">
                <use href="#icon-bell"></use>
              </svg>
            </span>
            <span className='header-right-item'>
              <svg class="icon header-right-bell" aria-hidden="true">
                <use href="#icon-plus"></use>
              </svg>
              <svg class="icon header-right-bell" aria-hidden="true">
                <use href="#icon-arrow"></use>
              </svg>
            </span>
            <span className='header-right-item'>
              <img class="mr-1 header-right-item-avatar" src="http://t.cn/ExO2mhC" height="20" width="20"/>
              <svg class="icon header-right-bell" aria-hidden="true">
                <use href="#icon-arrow"></use>
              </svg>
            </span>
          </div>
        </header>
      </Fragment>
    )
  }
}

export default Header;