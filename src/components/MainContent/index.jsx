import React, { Component, Fragment } from 'react';
import ContentItem from './ContentItem';
import './index.scss';

class MainContent extends Component {
  state = {
    projects: [1, 23, 3, 3, 321, 321, 21]
  }

  render() {
    const { projects } = this.state;
    
    return (
      <div className='main-right-container fl'>
        <nav className='main-right-nav'>
          <span className='main-right-item navActie'>Overview</span>
          <span className='main-right-item'>Repoositories<span className='main-right-item-counter'>23</span></span>
          <span className='main-right-item'>Projects</span>
          <span className='main-right-item'>Starts<span className='main-right-item-counter'>3</span></span>
          <span className='main-right-item'>Fillowers</span>
          <span className='main-right-item'>Following</span>
        </nav>
        <div className='main-right-main'>
          <h2 className='main-right-main-title'>Popular repositories </h2>
          <div className='main-right-main-projects'>
          <ContentItem projects={projects}/>
          </div>
        </div>
      </div>
    )
  }
}
export default MainContent;
