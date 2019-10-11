// 博客文章item

import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import './index.scss';

class Overview extends Component {
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
				<div className='fl mr-10  Overview-lag'>
					<svg className="icon mr-6" style={style} aria-hidden="true">
						<use href="#icon-code"></use>
					</svg>
					{item.lag.map((l, index) => <em key={index} className='Overview-overviewProject-see'>[{l}]</em>)}
				</div>
			)
		}
		const renderTag = (item) => {
			return (
				_.isEmpty(item.tags) ||
				<div className='mt-5 clearfix'>
					<svg className="icon mr-6" style={style} aria-hidden="true">
						<use href="#icon-tag"></use>
					</svg>
					{item.tags.map((t, index) => <em key={index} className='Overview-overviewProject-tag'>{t}</em>)}
				</div>
			)
		}
		return (
			<Fragment>
				<div className='Overview'>
					<div className='Overview-projects'>
						{projects.map(item =>
							<div className='Overview-overviewProject' key={item.id}>
								<a href={item.path}>
									<span className='Overview-overviewProject-name'>{item.title}</span>
								</a>
								<p className='Overview-overviewProject-des'>{item.des}</p>
								<div className='clearfix itemW'>
									{renderLag(item)}
								</div>
								{renderTag(item)}
								<div className='mt-5'>
									<svg className="icon mr-6" style={style} aria-hidden="true">
										<use href="#icon-eyes"></use>
									</svg>
									<em className='Overview-overviewProject-see'>{item.see}</em>
								</div>
							</div>
						)}
					</div></div>
			</Fragment>
		)
	}
}
export default Overview;
