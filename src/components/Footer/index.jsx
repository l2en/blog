import React, { Component } from 'react';
import Moment from 'moment';
import { Popover } from 'antd';
import "antd/dist/antd.css";
import './index.scss';
import {_formatTime} from '../../utils/utils';

const netMusicPic = require('../../static/netMusic.jpg')
class Footer extends Component {
	state = {
		taskTime: '--天--小时--分钟--秒'
	}
	componentDidMount() {
		this.countTakTime();
	}
	// 运行时间计算
	countTakTime = () => {
		const _this = this
		setInterval(() => {
			// let startTimeUnix = Moment('2019-3-1 17:10:00').valueOf();
			// let nowUnix = Moment().valueOf();
			const diffTiem = new Date().getTime() - new Date("2019-3-1 17:10:00").getTime();
			let taskTime = _formatTime(Moment().unix() - Moment("2019-3-1 17:10:00").unix());
			_this.setState({ taskTime: `${taskTime.d}天${taskTime.h}小时${taskTime.m}分钟${taskTime.s}秒` })
		}, 1000)
	}
	render() {
		const { taskTime } = this.state;
		const content = (
			<div>
				<img src={netMusicPic} style={{width:' 200px',height:'200px'}}/>
			</div>
		);
		return (
			<footer className='footer'>
				<span>
					<span><span className='fw-600'>稳定运行:</span><em className='footer-task-time'>{taskTime}</em></span>
					<span className='ml-10 fw-600'>|&nbsp;&nbsp;Personal Projects:</span>
					<Popover content={content} title="" trigger="hover">
						<a href="https://github.com/l2en" title='基于网易云音乐接口开发的在线音乐原生微信小程序' className='footer-link' rel="noopener noreferrer" target='_blank'>netMusic</a>
					</Popover>
					<a href="https://github.com/l2en" title='个人开发记账小程序' className='footer-link' rel="noopener noreferrer" target='_blank'>iWallet</a>
				</span>
				<a href="https://github.com/l2en" rel="noopener noreferrer" target='_blank'>
					<svg className="icon mr-6 footer-icon" aria-hidden="true">
						<use href="#icon-github2"></use>
					</svg>
				</a>
				<span>
					<span className='ml-10 fw-600'>Commercial Projects:</span>
					<a href="https://github.com/l2en" title='商业项目,NeuronApp/Neuron面端/NeuronPC' className='footer-link' rel="noopener noreferrer" target='_blank'>Neuron系列</a>
					<a href="https://github.com/l2en" className='footer-link' rel="noopener noreferrer" target='_blank'>纽睿CRM</a>
					<span className='footer-views ml-10'><span className='fw-600'>|&nbsp;&nbsp;访问总人次:</span><em>12345</em></span>
				</span>
			</footer>
		)
	}
}

export default Footer;