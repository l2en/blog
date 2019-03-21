import React, { Component } from 'react';
import './index.scss';

class MainContent extends Component {
  state = {
    project: [1, 23, 3, 3, 321, 321, 21]
  }
  render() {
    const style = {
      width: '14px',
      height: '13px'
    }
    const { project } = this.state;

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
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
            <div className='main-right-main-overviewProject'>
              <span className='main-right-main-overviewProject-name'>bdyyV3</span>
              <p className='main-right-main-overviewProject-des'>基于百度地图鹰眼web轨迹管理台V3精简</p>
              <div className='clearfix itemW'>
                <div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-tag"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                  <em className='main-right-main-overviewProject-tags'>JavaScript</em>
                </div>
                <div className='fl'>
                  <svg className="icon mr-6" style={style} aria-hidden="true">
                    <use href="#icon-eyes"></use>
                  </svg>
                  <em className='main-right-main-overviewProject-tags'>123,91</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MainContent;
