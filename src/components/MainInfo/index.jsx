import React, { Component } from 'react';
import './index.scss';

class MainInfo extends Component {
	render() {
		const style = {
			width: '14px',
			height: '13px'
		}
		return (
			<div className='main-left fl'>
				<div className='main-left-avatarWrapper'>
					<img src="https://dwz.cn/Qv5GlYHh" alt="avatar" className='main-left-avatar' />
					<span className='main-left-emoji'>
						<g-emoji alias="thought_balloon" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4ad.png">💭</g-emoji>
					</span>
					<span className='main-left-signature'>just do IT</span>
				</div>
				<h1 className='main-left-name'>
					<span className='main-left-proname'>l2en</span>
					<span className='main-left-nickname'>lalala</span>
				</h1>
				<div className='line mb-20'></div>
				<div>
					<svg className="icon mr-10" style={style} aria-hidden="true">
						<use href="#icon-tag"></use>
					</svg>
					<em className='tag green'>coder</em>
					<em className='tag red'>driver</em>
					<em className='tag black'>racer</em>
				</div>
				<div className='mt-10'>
					<svg className="icon mr-10" style={style} aria-hidden="true">
						<use href="#icon-location"></use>
					</svg>
					<span className='main-left-location'>Chengdu, China</span>
				</div>
				<div className='mt-10'>
					<svg className="icon mr-10" style={style} aria-hidden="true">
						<use href="#icon-team"></use>
					</svg>
					<a className='main-left-location fw-600' rel="noopener noreferrer" target='_blank' href='http://www.romens.cn/'>Qingdao Yunuo Co., Ltd.</a>
				</div>
			</div>
		)
	}
}

export default MainInfo;