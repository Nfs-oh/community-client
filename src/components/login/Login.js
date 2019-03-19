import React, { Component } from 'react';
import { Input, Button } from 'antd';
import "./Login.scss";
import { Icon } from 'antd';
class Login extends Component {
  	render() {
	    return (
		    <div className="login">
				<div className="login-title">用户登录</div>
				<div className="login-content">
					<form>
						<div className="input-box">
							<Input className="user" prefix={<Icon type="user" />} placeholder="请输入用户名或手机号" />
						</div>
						<div className="input-box">
							<Input className="pwd" prefix={<Icon type="lock" />} placeholder="请输入密码"/>
						</div>
						<div className="submit-box">
							<Button className="submit">登录</Button>
						</div>
					</form>
				</div>
	     	</div>
	    );
  	}
}

export default Login;
