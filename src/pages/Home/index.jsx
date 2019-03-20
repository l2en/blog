import React, { Component, Fragment } from 'react';
import { Header } from '../../components';
import './index.scss';

class Home extends Component {
  render() {
    const style = {
      width: '32px',
      height: '32px'
    }
    return (
      <Fragment>
        <Header/>
      </Fragment>
    )
  }
}

export default Home;