import React, { Component } from 'react';
import { Layout } from 'antd';
import UserInfo from './user/UserInfo.js';
import logo from '../../assets/img/logo.png';
import { Icon } from 'antd'

import './header.scss';

const { Header } = Layout;

class HeaderWrap extends Component {
	constructor() {
		super();
		this.state = {
			isLogin: false
		}
	}
  	render() {
	    return (
	      	<div className="header">
	      		<Header style={{backgroundColor: "#fff"}}>
					<div className="container">
						<div className="header-wrap">
							<div className="header-logo">
								<div className="logo-wrap"><img src={logo}/></div>
								<div className="logo-title">社团招聘平台</div>
							</div>
							<div className="header-nav">
								{this.state.isLogin &&
									<>
										<div className="nav-wrap">
											<div className="nav-item active">首页</div>
											<div className="nav-item">我的社团</div>
											<div className="nav-item">活动列表</div>
										</div>
										<div className="header-user">
											<UserInfo></UserInfo>
										</div>
									</>
								}
								{!this.state.isLogin &&
									<>
										<div className="regist-box">
											<div className="regist-icon"><Icon type="user-add" className="regist-add" /></div>
											<div className="regist">立即注册</div>
										</div>
									</>
								}
							</div>
						</div>	
					</div>
	      		</Header>
	      	</div>
	    );
  	}
}

export default HeaderWrap;
