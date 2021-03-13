import React, { useState } from 'react';
import {Redirect } from 'react-router-dom';
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
import { useAuth } from '../config/Auth';
import { storeId } from '../api/userId';

const Login = () => {
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');
	const { setAuthTokens } = useAuth();
	const [isLogged, setIsLogged] = useState();
	const [logMess, setLogMess] = useState();
	const [role, setRole] = useState();

	const handleLogin = async (e) => {
		e.preventDefault();
		let dataRes = await kopi.post('/api/users/signin', {
			email: Email,
			password: Password,
		});
		storeId(dataRes);
		if (dataRes.status === 200) {
			setAuthTokens(dataRes.data.message.token);
			setIsLogged(true);
			setRole(dataRes.data.message.role);
			return;
		} else {
			setIsLogged(false);
			setLogMess(dataRes.status);
			return;
		}
		// .then((res) => {
		// 	storeId(res);
		// 	if (res.status === 200) {
		// 		setAuthTokens(res.data.message.token);
		// 		setIsLogged(true);
		//       setRole(res.data.message.role);
		//       return;
		// 	} else {
		//       setIsLogged(false);
		//       setLogMess(res.status);
		//       return;
		//    }
		// });
	};

	if (isLogged) {
		if (role === 1) {
			return <Redirect to={'/admin'} />;
		}
		return <Redirect to={'/'} />;
	}

	return (
		<Container>
			<Wrapper>
				<ImgWrapper>
					<ImgLogin src={imgLog} alt="kopi" />
				</ImgWrapper>
				<TextWrapper>
					<MainTitle>Selamat Datang</MainTitle>
					<SubTitle>
						Silahkan masukkan detail untuk login ke akun anda
					</SubTitle>
					<form onSubmit={handleLogin}>
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
							Masuk
						</MainButton>
					</form>
					<SecondaryButton style={{ marginTop: '2rem' }} to="/signup">
						Daftar
					</SecondaryButton>
				</TextWrapper>
			</Wrapper>
		</Container>
	);
};

export default Login;
