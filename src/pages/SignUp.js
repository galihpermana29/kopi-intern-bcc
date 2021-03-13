import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import imgLog from '../img/log.png';
import {
	Wrapper,
	Container,
	ImgWrapper,
	ImgLogin,
	TextWrapper,
	Input,
	MainButton,
	SecondaryButton,
	MainTitle,
	SubTitle,
} from '../stylesComp/LoginSign';
import kopi from '../api/kopi';
import { storeId } from '../api/userId';
import { useAuth } from '../config/Auth';

const Login = () => {
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');
	const [Name, setName] = useState('');
	const [Phone, setPhone] = useState('');
	const { setAuthTokens } = useAuth();
	const [isLogged, setIsLogged] = useState(false);

	const handleSignup = async (e) => {
		e.preventDefault();
		let dataSign = await kopi.post('/api/users', {
			name: Name,
			email: Email,
			password: Password,
			phone: Phone,
			role: 2,
		});
		let dataLogin = await kopi.post('/api/users/signin', {
			email: Email,
			password: Password,
		});
		storeId(dataLogin);
		dataLogin.status === 200 && setAuthTokens(dataLogin.data.message.token);
		setIsLogged(true);
	};

	if (isLogged) {
		return <Redirect to={'/'} />;
	}

	return (
		<Container>
			<Wrapper>
				<ImgWrapper>
					<ImgLogin src={imgLog} alt="kopi" />
				</ImgWrapper>
				<TextWrapper>
					<MainTitle>Daftar</MainTitle>
					<SubTitle>Silahkan mendaftar untuk masuk</SubTitle>
					<form onSubmit={handleSignup}>
						<Input
							type="text"
							name="name"
							label="Name"
							required
							onChange={(e) => setName(e.target.value)}
						/>
						<Input
							type="number"
							name="phone"
							label="phone"
							required
							onChange={(e) => setPhone(e.target.value)}
						/>
						<Input
							type="email"
							name="email"
							label="Email"
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							type="password"
							name="password"
							label="Password"
							required
							onChange={(e) => setPassword(e.target.value)}
						/>
						<p>Lupa Password?</p>
						<MainButton style={{ marginTop: '2rem' }} type="submit">
							Daftar
						</MainButton>
					</form>
					<SecondaryButton style={{ marginTop: '2rem' }} to="/login">
						Masuk
					</SecondaryButton>
				</TextWrapper>
			</Wrapper>
		</Container>
	);
};

export default Login;
