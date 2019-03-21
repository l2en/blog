import React, { Component, Fragment } from 'react';
import ContentItem from './ContentItem';
import './index.scss';

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
        tag: ['vue相关','React相关']
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
        tag: ['css兼容','地图']
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
    navs: [
      {
        name: 'Overview',
        num: 0
      },
      {
        name: 'Repoositories',
        num: 0
      },
      {
        name: 'Projects',
        num: 10
      },
      {
        name: 'Starts',
        num: 121
      },
      {
        name: 'Fillowers',
        num: 9
      },
      {
        name: 'Following',
        num: 12
      }
    ],
    activeNav: 'Overview'
  
  }
  changeNav=(navname)=>{
    this.setState({activeNav:navname})
  }
  render() {
    const { projects, navs, activeNav } = this.state;

    return (
      <div className='main-right-container fl'>
        <nav className='main-right-nav'>
          {
            navs.map(item =>
              <span key={item.name} className={activeNav===item.name?'navActie main-right-item': 'main-right-item'} onClick={()=>this.changeNav(item.name)}>{item.name}
                {Number(item.num) ? <span className='main-right-item-counter'>{item.num}</span> : null}
              </span>

            )
          }
        </nav>
        <div className='main-right-main'>
          <h2 className='main-right-main-title'>Popular repositories </h2>
          <div className='main-right-main-projects'>
            <ContentItem projects={projects} />
          </div>
        </div>
      </div>
    )
  }
}
export default MainContent;
