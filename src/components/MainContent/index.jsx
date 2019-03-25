import React, { Component, Fragment } from 'react';
import Overview from './Overview';
import MainNav from './MainNav';
import './index.scss';
import _config from '../../_config'

class MainContent extends Component {
  state = {
    projects: [
      {
        id: '3213-da1f-0000',
        name: 'bdyyV3',
        des: '基于百度地图鹰眼web轨迹管理台V3精简',
        lag: ['JavaScript', 'MD'],
        see: '123,91',
        tag: []
      },
      {
        id: '3213-da1f-1111',
        name: 'blogSourceCode2',
        des: '原博客源码2',
        lag: ['HTML', 'React'],
        see: '12',
        tag: ['vue相关', 'React相关']
      },
      {
        id: '3213-da1f-2222',
        name: 'componentLib',
        des: '组件库',
        lag: ['HTML', 'JavaScript'],
        see: '1',
        tag: ['css兼容']
      },
      {
        id: '3213-da1f-333',
        name: 'componentLib',
        des: '组件库',
        lag: ['HTML', 'JavaScript'],
        see: '1',
        tag: ['css兼容', '地图']
      },
      {
        id: '3213-da1f-4444',
        name: 'componentLib',
        des: '组件库',
        lag: ['HTML', 'JavaScript'],
        see: '1',
        tag: ['css3与css']
      },
      {
        id: '3213-da1f-5555',
        name: 'componentLib',
        des: '组件库',
        lag: ['HTML', 'JavaScript'],
        see: '1',
        tag: ['组件库']
      },
      {
        id: '3213-da1f-6666',
        name: 'componentLib',
        des: '组件库',
        lag: ['HTML', 'JavaScript'],
        see: '1',
        tag: ['web']
      },
      {
        id: '3213-da1f-7777',
        name: 'componentLib',
        des: '组件库',
        lag: ['HTML', 'JavaScript'],
        see: '1',
        tag: ['css兼容']
      },
      {
        id: '3213-da1f-8888',
        name: '测试上传Upload',
        des: '组件库',
        lag: ['React'],
        see: '12',
        tag: ['上传']
      }
    ],
  }
  componentDidMount() {
    this.setState({
      projects: _config.articles
    })
  }
  changeNav = (navname) => {
    console.log('===>>xuanze', navname)
  }
  render() {
    const { projects, navs, activeNav } = this.state;

    return (
      <div className='main-right-container fl'>
        <MainNav emitChangeNav={(name) => this.changeNav(name)} />
        <Overview projects={projects} />
      </div>
    )
  }
}
export default MainContent;
