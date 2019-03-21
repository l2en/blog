import React, { Component } from 'react';
import './index.scss';

class Header extends Component {
  render() {
    const style = {
      width: '32px',
      height: '32px'
    }
    return (
      <header className='header'>
        <div className='header-left'>
          <a href="https://github.com/l2en" target='_blank'>
            <svg className="icon mr-15" style={style} aria-hidden="true">
              <use href="#icon-github"></use>
            </svg>
          </a>
          <label className='header-left-searchWrapper mr-10'>
            <input className='header-left-search' placeholder='Search or jump to...' />
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" className="mr-2" />
          </label>
          <div className='header-left-item'>
            <a href='javascript:void(0)'>Pull requests</a>
            <a href='javascript:void(0)'>Issues</a>
            <a href='javascript:void(0)'>Marketplace</a>
            <a href='javascript:void(0)'>Explore</a>
          </div>
        </div>
        <div className='header-right ml-35'>
          <span className='header-right-item'>
            <svg className="icon header-right-bell" aria-hidden="true">
              <use href="#icon-bell"></use>
            </svg>
          </span>
          <span className='header-right-item'>
            <svg className="icon header-right-bell" aria-hidden="true">
              <use href="#icon-plus"></use>
            </svg>
            <svg className="icon header-right-bell" aria-hidden="true">
              <use href="#icon-arrow"></use>
            </svg>
          </span>
          <span className='header-right-item'>
            <a href="https://github.com/l2en" target='_blank'>
              <img className="mr-1 header-right-item-avatar" src="http://t.cn/ExO2mhC" height="20" width="20" />
            </a>
            <svg className="icon header-right-bell" aria-hidden="true">
              <use href="#icon-arrow"></use>
            </svg>
          </span>
        </div>
      </header>
    )
  }
}

export default Header;