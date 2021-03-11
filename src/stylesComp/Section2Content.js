import React, { useEffect, useState } from 'react';
import robusta from '../img/robusta.jpg';
import excelsa from '../img/excelsa.jpg';
// import arabica from '../img/arabika.jpg';
import CardProd from '../stylesComp/Card';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { ProdukData } from './ProdukData';
import kopi from '../api/kopi';
import arabica from '../img/arabika.jpg';

export const Section2 = styled.div`
	text-align: center;
	min-height: 100vh;
	display: flex;
	align-items: center;
	/* border: 1px solid green; */
	@media only screen and (min-width: 670px) {
	}
`;

export const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	/* border: 1px solid red; */
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
	/* text-align: center; */
	margin-top: 3rem;
	@media only screen and (min-width: 670px) {
		margin-top: 5rem;
		align-self: flex-end;
		padding-bottom: 3rem;
	}
`;

export const MainTitle = styled.h2`
	font-size: 2.2rem;
	/* margin-bottom: 5rem; */
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

export const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		margin: '0 auto',
		width: '50%',
		height: 140,
		objectFit: 'cover',
	},
});

const Section2Content = () => {
	const classes = useStyles();
   const [produk, setProduk] = useState();
	const getProductData = async () => {
		await kopi.get('/api/products').then((res) => {
         setProduk(res.data.message)
		});
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
				<SecondTitle>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
					expedita.
				</SecondTitle>
			</TextWrapper>
			<CardsWrapper>
				{produk && produk.map(({ id_product, product_name, product_price, product_desc }) => {
					return (
						<CardProd
							nama={product_name}
							img={arabica}
							desc={product_desc}
							harga={product_price}
                     id={id_product}
							key={id_product}
						/>
					);
				})}
			</CardsWrapper>
		</Container>
	);
};

export default Section2Content;
