// 博客文章item

import React, { Component, Fragment } from 'react';
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

		return (
			<Fragment>
				{projects.map(item => 
					<div className='main-right-main-overviewProject' key={item.id}>
						<span className='main-right-main-overviewProject-name'>{item.name}</span>
						<p className='main-right-main-overviewProject-des'>{item.des}</p>
						<div className='clearfix itemW'>
							<div className='main-right-main-overviewProject-itemWrapper fl mr-10'>
								<svg className="icon mr-6" style={style} aria-hidden="true">
									<use href="#icon-tag"></use>
								</svg>
								{item.lag.map((l,index) => <em key={index} className='main-right-main-overviewProject-tags'>{l}</em>)}
							</div>
							<div className='fl'>
								<svg className="icon mr-6" style={style} aria-hidden="true">
									<use href="#icon-eyes"></use>
								</svg>
								<em className='main-right-main-overviewProject-tags'>{item.see}</em>
							</div>
						</div>
					</div>
				)}
			</Fragment>
		)
	}
}
export default ContentItem;
