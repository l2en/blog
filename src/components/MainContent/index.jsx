import React, { Component } from 'react';
import Overview from './Overview';
import MainNav from './MainNav';
import Repositories from './Repositories';
import './index.scss';
import _config from '../../_config'
import * as _ from 'lodash';

class MainContent extends Component {
  state = {
    chkedNav: 'Overview',
    projects: []
  }
  componentDidMount() {
    this.setState({
      projects: _config.articles
    },()=>{
      this.filterOverviewData(this.state.projects)
    })
  }
  // 切换tab
  changeNav = (chkedNav) => {
    this.setState({chkedNav})
  }
  // 筛选overview数据
  filterOverviewData(data){
    return _.groupBy(data,item=>item.isOverview)['true'];
  }
  render() {
    const { projects, chkedNav } = this.state;
    const renderMain = () =>{
      switch(chkedNav){
        case 'Overview': return <Overview projects={this.filterOverviewData(projects)} style={{display: 'none'}}/>;
        case 'Repositories': return <Repositories/>;
        default: return null;
      }
    }
    return (
      <div className='main-right-container fl'>
        <MainNav emitChangeNav={(name) => this.changeNav(name)} />
        {renderMain()}
      </div>
    )
  }
}
export default MainContent;
