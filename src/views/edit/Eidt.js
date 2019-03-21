import React, { Component } from 'react';
import Wangeditor from '../../components/wangeditor/Wangeditor.js';
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
								<div className="desc-title"></div>
								<div className="desc-content">
									<div className="desc-poster"></div>
									<div className="article-cells">
										<div className="article-title"></div>
										<div className="article-author"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Edit;