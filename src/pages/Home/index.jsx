import React, { Component, Fragment } from 'react';
import { Header, Main } from '../../components';

import './index.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Main/>
      </Fragment>
    )
  }
}

export default Home;