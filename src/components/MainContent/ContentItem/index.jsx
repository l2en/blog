// 博客文章item

import React, { Component, Fragment } from 'react';
import './index.scss';

class ContentItem extends Component {
	static defaultProps = {
		projects: [231, 123, 21, 1, 2, 3]
	}
	renderProjectItem = (item) => {
		const style = {
			width: '14px',
			height: '13px'
		}
		return (
			<Fragment>
				<div className='main-right-main-overviewProject' key={item}>
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
			</Fragment>
		)
	}
	render() {
		const { projects } = this.props;

		return (
			<Fragment>
				{projects.map(item => this.renderProjectItem(item))}
			</Fragment>
		)
	}
}
export default ContentItem;
