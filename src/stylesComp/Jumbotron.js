import styled from 'styled-components';
import { Link } from 'react-router-dom';
import jumbotron2 from '../img/jumbotron2.png';

export const Section1 = styled.div`
	height: 100vh;
	background: linear-gradient(#ef962d, #fff 70%);
	border: .1px solid white;
`;

export const JumbotronWrapper = styled.div`
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	margin-top: 6.5rem;
	display: flex;
	width: 80%;
	height: 85%;
	flex-wrap: wrap;
	@media only screen and (min-width: 670px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const JumbotronTextWrapper = styled.div`
	order: 2;
	/* border: 1px solid red; */
	height: 50%;
	text-align: center;
	@media only screen and (min-width: 670px) {
		order: inherit;
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: left;
		padding: 2rem;
		box-sizing: border-box;
	}
`;
export const JumbotronImgWrapper = styled.div`
	/* width: 100%; */
	display: flex;
	align-items: center;
	height: 50%;
	/* border: 1px solid yellow; */
	@media only screen and (min-width: 670px) {
		width: 50%;
	}
`;

export const JumbotronMainTitle = styled.h2`
	font-size: 2.2rem;
	margin-bottom: 1rem;
	@media only screen and (min-width: 670px) {
		font-size: 3.3rem;
		width: 100%;
		max-width: 350px;
	}
`;

export const JumbotronSecondTitle = styled.h3`
	font-weight: 500;
	margin-bottom: 1rem;
	font-size: 2rem;
	@media only screen and (min-width: 670px) {
		font-size: 2.2rem;
		margin-bottom: 2rem;
	}
`;

export const JumbotronDesc = styled.p`
	font-size: 1.4rem;
	margin-bottom: 2rem;
	@media only screen and (min-width: 670px) {
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}
`;

export const JumbotronButton = styled(Link)`
	background-color: #ef962d;
	height: 40px;
	width: 140px;
	margin: 0 auto;
	line-height: 40px;
	display: block;
	text-decoration: none;
	color: #fff;
	border-radius: 0.5rem;
	font-size: 1.3rem;
	transition: 0.2s all;
	@media only screen and (min-width: 670px) {
		margin: inherit;
		text-align: center;
	}

	&:hover {
		background-color: #d68b34;
	}
`;

export const JumbotronImg = styled.img`
	width: 100%;
	max-width: 500px;
	margin: 0 auto;

`;

const Jumbotron = () => {
	return (
		<JumbotronWrapper>
			<JumbotronTextWrapper>
				<JumbotronMainTitle>
					Bingung Cari Produk Kopi Dampit ?
				</JumbotronMainTitle>
				<JumbotronSecondTitle>Cari Di sini Aja</JumbotronSecondTitle>
				<JumbotronDesc>
					Kopi khas dampit dengan kualitas terbaik! kamu cukup melakukan
					pembelian di sini, Maka kurir kami akan langsung ke tempatmu.
				</JumbotronDesc>
				<JumbotronButton to="/">Beli Sekarang</JumbotronButton>
			</JumbotronTextWrapper>
			<JumbotronImgWrapper>
				<JumbotronImg src={jumbotron2} />
			</JumbotronImgWrapper>
		</JumbotronWrapper>
	);
};

export default Jumbotron;
