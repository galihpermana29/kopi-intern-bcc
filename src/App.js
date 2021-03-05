import GlobalStyle from './theme/globalStyles';
import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Home from './pages/Home';
import PrivateRoute from './config/PrivateRoute';
import { AuthContext } from './config/Auth';
import { SliderData } from './stylesComp/SliderData';

function App() {
	const existingToken = JSON.parse(localStorage.getItem('tokens'));
	const [authTokens, setAuthTokens] = useState(existingToken);

	const setTokens = (data) => {
		localStorage.setItem('tokens', JSON.stringify(data));
		setAuthTokens(data);
	};
	return (
		<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
			<Router>
				<GlobalStyle />
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						{/* <Route exact path="/">
						<Home slides={SliderData} />
					</Route> */}
						{/* <PrivateRoute exact path="/" component={Home} /> */}
					</Switch>
				</div>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
