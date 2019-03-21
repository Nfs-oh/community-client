import React, { Component } from 'react';
import HeaderWrap from "./components/header/Header.js";
import Index from './views/index/Index.js';
import Home from './views/home/Home.js';
import ArticleList from './views/articleList/ArticleList.js';
import Edit from './views/edit/Edit.js';
import { 
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import './style/style.scss';
class App extends Component {
	render() {
	    return (
	      	<div className="App">
	      		<Router>
	      			<HeaderWrap />
	      			<Switch>
	      				<Route path="/" exact component={ Index }></Route>
	      				<Route path="/home" exact component={ Home }></Route>
	      				<Route path="/article" exact component={ ArticleList }></Route>
	      				<Route path='/edit' component={ Edit }></Route>
	      			</Switch>
	      		</Router>
	      	</div>
	    );
	}
}

export default App;
