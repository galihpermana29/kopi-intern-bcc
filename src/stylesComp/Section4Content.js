import React from 'react';
import styled from 'styled-components';
import {
	Container,
	MainTitle,
	SecondTitle,
} from '../stylesComp/Section2Content';
import logo from '../img/logo.png';

export const Section4 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	margin: 3rem 0;
	text-align: center;
	@media only screen and (min-width: 670px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	& > * {
		margin-bottom: 2rem;
	}
`;

const TextandLogoWrapper = styled.div`
	@media only screen and (min-width: 670px) {
		max-width: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: left;
	}
`;

const Logo = styled.img`
	margin-bottom: 2rem;
	@media only screen and (min-width: 670px) {
		margin-right: 4rem;
	}
`;

const Section4Content = () => {
	return (
		<Container>
			<Wrapper>
				<MainTitle>Tentang Kami</MainTitle>
				<TextandLogoWrapper>
					<Logo src={logo} alt="logo" width="200px" />
					<SecondTitle>
						Sebuah Website untuk bekerja sama dengan salah satu UMKM
						produk Kopi di dampit yang terdampak pandemi untuk bisa
						berjualan di website kami.​ Nilai bisnis utama kami ada di
						pengemasan dan pendistribusian untuk menambah nilai jual kopi
						sekaligus mempermudah penikmat dan pemilik kedai kopi dalam
						menjangkau produk UMKM tersebut.​
					</SecondTitle>
				</TextandLogoWrapper>
			</Wrapper>
		</Container>
	);
};

export default Section4Content;
