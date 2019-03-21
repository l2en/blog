import React, { Component, Fragment } from 'react';
import { Header, Main, Footer } from '../../components';
import './index.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Home;