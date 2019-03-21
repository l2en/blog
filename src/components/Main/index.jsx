import React, { Component } from 'react';
import './index.scss';
import MainInfo from '../MainInfo';
import MainContent from '../MainContent';

class Main extends Component {
	render() {
		return (
			<main className='main-container clearfix'>
				<MainInfo />
				<MainContent />
			</main>
		)
	}
}

export default Main;