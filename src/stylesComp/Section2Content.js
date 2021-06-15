import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardProd from '../stylesComp/Card';
import styled from 'styled-components';
import kopi from '../api/kopi';

export const Section2 = styled.div`
	text-align: center;
	min-height: 100vh;
	display: flex;
	align-items: center;
	@media only screen and (min-width: 670px) {
	}
`;

export const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	& > * {
		margin-top: 2rem;
	}
	margin-bottom: 2rem;
	@media only screen and (min-width: 670px) {
		justify-content: space-evenly;
		& > * {
			margin-top: 0;
		}
		margin-bottom: 5rem;
	}
`;

export const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	height: 100%;
`;

export const TextWrapper = styled.div`
	margin-top: 3rem;
	@media only screen and (min-width: 670px) {
		margin-top: 5rem;
		align-self: flex-end;
		padding-bottom: 3rem;
	}
`;

export const MainTitle = styled.h2`
	font-size: 2.2rem;
	text-align: center;
	margin: 1rem auto;
	@media only screen and (min-width: 670px) {
		font-size: 3.3rem;
		max-width: 500px;
		width: 100%;
	}
`;

export const SecondTitle = styled.p`
	font-size: 1.4rem;
	margin-bottom: 1rem;
	@media only screen and (min-width: 670px) {
		font-size: 1.5rem;
	}
`;

const Section2Content = () => {
	const [produk, setProduk] = useState();
	const [isPending, setIsPending] = useState(true);


	const getProductData = async () => {
		try {
         let dataGet = await fetch('docs.json')
         let data = await dataGet.json();
			// let dataGet = await kopi.get('/api/products');
			// setProduk(dataGet.data.message);
         setProduk(data)
			setIsPending(false);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		getProductData();
	}, []);

	return (
		<Container>
			<TextWrapper>
				<MainTitle>
					Produk Kami <br /> dengan Kualitas Terbaik{' '}
				</MainTitle>
				<SecondTitle>Inilah produk-produk kami.</SecondTitle>
			</TextWrapper>
			<CardsWrapper>
				{isPending && <CircularProgress style={{ color: '#ef962d' }} />}
				{produk &&
					produk.map(
						({
							id_product,
							product_name,
							product_price,
							product_img,
							product_desc,
						}) => {
							return (
								<CardProd
									nama={product_name}
									img={product_img}
									desc={product_desc}
									harga={product_price}
									id={id_product}
									key={id_product}
								/>
							);
						}
					)}
			</CardsWrapper>
		</Container>
	);
};

export default Section2Content;
