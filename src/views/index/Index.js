import React, { Component } from 'react';
import { Carousel } from 'antd';
import Login from '../../components/login/Login.js';
import Notice from '../../components/notice/Notice.js';

import './Index.scss';

import bg1 from '../../assets/img/bg1.jpg';
import bg2 from '../../assets/img/bg2.jpg';
import bg3 from '../../assets/img/bg3.jpg';

class Index extends Component {
  	render() {
	    return (
	      	<div className="index">
				<div className="carousel">
					<Carousel autoplay>
						<div className="carousel-item">
							<img src={bg1} alt="未加载"/>
						</div>
						<div className="carousel-item">
							<img src={bg2} alt="未加载"/>
						</div>
						<div className="carousel-item">
							<img src={bg3} alt="未加载"/>
						</div>
					</Carousel>
				</div>
				<div className="login-wrap">
					<Login></Login>
				</div>
				<div className="notice-box">
					
				</div>
	      	</div>
	    );
  	}
}

export default Index;

