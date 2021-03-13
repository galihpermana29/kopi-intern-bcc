import GlobalStyle from './theme/globalStyles';
import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Invoice from './pages/Invoice';
import PrivateRoute from './config/PrivateRoute';
import { AuthContext } from './config/Auth';
import Navbar from './stylesComp/Navbar';

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
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						{authTokens ? (
							<>
								<Navbar />
								<Switch>
									<PrivateRoute exact path="/" component={Home} />
									<PrivateRoute path="/cart" component={Cart} />
									<PrivateRoute path="/invoice" component={Invoice} />
									<PrivateRoute path="/admin" component={Admin} />
								</Switch>
							</>
						) : (
							<>
								<Navbar />
								<Switch>
									<Route exact path="/" component={Home} />
									<PrivateRoute path="/cart" component={Cart} />
                           <PrivateRoute path="/invoice" component={Invoice} />
                           <Route path="/admin" component={Admin} />
								</Switch>
							</>
						)}
					</Switch>
				</div>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
