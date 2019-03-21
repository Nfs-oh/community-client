import React, { Component } from 'react';
import Wangeditor from '../../components/wangeditor/Wangeditor.js';
import { Button, Input } from 'antd'
import "./Edit.scss";

class Edit extends Component {
	constructor() {
		super();
		this.state = {
			article: '',
			description: {},
		}
	}
	render() {
		return (
			<div className="edit">
				<div className="container">
					<div className="article-menu">
						<div className="article-list">
							<div className="article-poster">
								<div className="article-poster-content">
									
								</div>
							</div>
							<div className="article-operate">
								<div className="article-preview">
									<Button type="primary">预览</Button>
								</div>
								<div className="article-save">
									<Button className="article-save-btn">保存</Button>
								</div>
							</div>
							<div className="article-poster-title"></div>
						</div>
					</div>
					<div className="article-wrap">
						<div className="article-msg">编辑你的文章</div>
						<div className="edit-wrap">
							<Wangeditor />
						</div>
						<div className="edit-description">
							<div className="desc-wrap">
								<div className="desc-title">
									<div className="label">标题</div>
									<Input></Input>
								</div>
								<div className="article-author">
									<div className="label">作者</div>
									<Input></Input>
								</div>
								<div className="article-title">
									<div className="label">摘要</div>
									<Input></Input>
								</div>
							</div>
							<div className="desc-operate">
								<Button>存草稿</Button>
								<Button>保存</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Edit;