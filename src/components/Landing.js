import React from 'react';
import Menu from './menu/Menu';
import stock1 from '../Images/stock1.webp';
import { Container, Row } from 'react-bootstrap';
import './Landing.scss';

export default function Landing() {
	return (
		<div class="container-md, landing-container">
			<div className="row, window-1">
				<Menu />
				<div className="row, img-cover" style={{ backgroundImage: `url(${stock1})` }}>
				</div>
			</div>
		</div>
	);
}
