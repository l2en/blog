// 博客文章item

import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import './index.scss';

class ContentItem extends Component {
	static defaultProps = {
		projects: []
	}
	render() {
		const { projects } = this.props;
		const style = {
			width: '14px',
			height: '13px'
		}
		const renderLag = (item) => {
			return (
				_.isEmpty(item.lag) ||
				<div className='fl mr-10'>
					<svg className="icon mr-6" style={style} aria-hidden="true">
						<use href="#icon-code"></use>
					</svg>
					{item.lag.map((l, index) => <em key={index} className='main-right-main-overviewProject-see'>[{l}]</em>)}
				</div>
			)
		}
		const renderTag = (item) => {
			return (
				_.isEmpty(item.tag) ||
				<div className='mt-5 clearfix'>
					<svg className="icon mr-6" style={style} aria-hidden="true">
						<use href="#icon-tag"></use>
					</svg>
					{item.tag.map((t, index) => <em key={index} className='main-right-main-overviewProject-tag'>{t}</em>)}
				</div>
			)
		}
		return (
			<Fragment>
				{projects.map(item =>
					<div className='main-right-main-overviewProject' key={item.id}>
						<a href={item.path}>
							<span className='main-right-main-overviewProject-name'>{item.name}</span>
						</a>
						<p className='main-right-main-overviewProject-des'>{item.des}</p>
						<div className='clearfix itemW'>
							{renderLag(item)}
							<div className='fl'>
								<svg className="icon mr-6" style={style} aria-hidden="true">
									<use href="#icon-eyes"></use>
								</svg>
								<em className='main-right-main-overviewProject-see'>{item.see}</em>
							</div>
						</div>
						{renderTag(item)}
					</div>
				)}
			</Fragment>
		)
	}
}
export default ContentItem;
