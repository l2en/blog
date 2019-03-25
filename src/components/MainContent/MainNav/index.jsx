import React, { Component } from 'react'
import './index.scss';

class Nav extends Component {
	state = {
		activeNav: 'Overview',
		navs: [
			{
				name: 'Overview',
				num: 0
			},
			{
				name: 'Repositories',
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
	}
	static defaultProps = {
		emitChangeNav: () => { }
	}
	// 切换nav
	changeNav = (navname) => {
		this.setState({ activeNav: navname });
		this.props.emitChangeNav(navname)
	}
	render() {
		const { navs, activeNav } = this.state;
		return (
			<nav className='Nav-wrapper'>
				{
					navs.map(item =>
						<span key={item.name} className={activeNav === item.name ? 'navActie Nav-item' : 'Nav-item'} onClick={() => this.changeNav(item.name)}>{item.name}
							{Number(item.num) ? <span className='Nav-item-counter'>{item.num}</span> : null}
						</span>
					)
				}
			</nav>
		)
	}

}
export default Nav;
