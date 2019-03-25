import React, { Component } from 'react';
import Moment from 'moment';
import './index.scss';

class Footer extends Component {
	state = {
		taskTime: '--天--小时--分钟--秒'
	}
	componentDidMount(){
		this.countTakTime();
	}
	// 运行时间计算
	countTakTime = ()=>{
		const _this = this
		setInterval(()=>{
			let startTimeUnix = Moment('2019-3-1 17:10:00').valueOf();
			let nowUnix = Moment().valueOf();
			let taskTime = Moment(Moment(nowUnix).diff(startTimeUnix)).format('DD天hh小时mm分钟ss秒')
			_this.setState({taskTime})
		},1000)
	}
	render() {
		const {taskTime} = this.state;

		return (
			<footer className='footer'>
				<span>
					<span><span className='fw-600'>已稳定运行:</span><em className='footer-task-time'>{taskTime}</em></span>
					<span className='ml-10 fw-600'>|&nbsp;&nbsp;Personal Projects:</span>
					<a href="https://github.com/l2en" title='基于网易云音乐接口开发的在线音乐原生微信小程序' className='footer-link' target='_blank'>netMusic</a>
					<a href="https://github.com/l2en" title='个人开发记账小程序' className='footer-link' target='_blank'>iWallet</a>
				</span>
				<a href="https://github.com/l2en" target='_blank'>
					<svg className="icon mr-6 footer-icon" aria-hidden="true">
						<use href="#icon-github2"></use>
					</svg>
				</a>
				<span>
					<span className='ml-10 fw-600'>Commercial Projects:</span>
					<a href="https://github.com/l2en" title='商业项目,NeuronApp/Neuron面端/NeuronPC' className='footer-link' target='_blank'>Neuron系列</a>
					<a href="https://github.com/l2en" className='footer-link' target='_blank'>纽睿CRM</a>
					<span className='footer-views ml-10'><span className='fw-600'>|&nbsp;&nbsp;访问总人次:</span><em>12345</em></span>
				</span>
			</footer>
		)
	}
}

export default Footer;