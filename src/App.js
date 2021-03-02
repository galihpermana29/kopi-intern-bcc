import GlobalStyle from './theme/globalStyles';
import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Home from './pages/Home';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<div>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route exact path="/" component={Home} />
					{/* <PrivateRoute exact path="/" component={Home} /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
