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
        {/* <img src="https://tool.lu/netcard/" className='home_ip'></img> */}
      </Fragment>
    )
  }
}

export default Home;