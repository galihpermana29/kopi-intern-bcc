import React from 'react';
import { Link } from 'react-router-dom';
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
   SubTitle
} from '../stylesComp/LoginSign';

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<ImgWrapper>
					<ImgLogin src={imgLog} alt="kopi" />
				</ImgWrapper>
				<TextWrapper>
					<MainTitle>Selamat Datang</MainTitle>
					<SubTitle>Silahkan masukkan detail untuk login ke akun anda</SubTitle>
					<form action="">
						<Input type="email" name="email" label="Email" required/>
						<Input type="password" name="password" label="Password" required/>
						<p>Lupa Password?</p>
						<MainButton style={{ marginTop: '2rem' }} type="submit">
							Masuk
						</MainButton>
					</form>
					<SecondaryButton style={{ marginTop: '2rem' }} to="/Signup">
						Daftar
					</SecondaryButton>
				</TextWrapper>
			</Wrapper>
		</Container>
	);
};

export default Login;
