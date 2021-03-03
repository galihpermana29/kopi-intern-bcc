import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../stylesComp/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Jumbotron, { Section1 } from '../stylesComp/Jumbotron';
import robusta from '../img/robusta.jpg';
import excelsa from '../img/excelsa.jpg';
import arabica from '../img/arabika.jpg';

import CardProd from '../stylesComp/Card';

const Section2 = styled.div`
	text-align: center;
	min-height: 100vh;
	display: flex;
	align-items: center;
	/* border: 1px solid green; */
	@media only screen and (min-width: 670px) {
	}
`;

const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	/* border: 1px solid red; */
   & > * {
      margin-top: 2rem;
   }
	@media only screen and (min-width: 670px) {
		justify-content: space-evenly;
      & > * {
      margin-top: 0;
   }
	}
`;

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const TextWrapper = styled.div`
	margin-top: 2rem;
	@media only screen and (min-width: 670px) {
		align-self: flex-end;
		padding-bottom: 8rem;
	}
`;

const MainTitle = styled.h2`
	font-size: 2.2rem;
   /* margin-bottom: 5rem; */
	margin: 1rem auto;
	@media only screen and (min-width: 670px) {
		font-size: 3.3rem;
		max-width: 500px;
		width: 100%;
	}
`;

const SecondTitle = styled.p`
	font-size: 1.4rem;
   margin-bottom: 1rem;
	@media only screen and (min-width: 670px) {
		font-size: 1.5rem;
	}
`;

const useStyles = makeStyles({
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

// const useStyles = makeStyles((theme) => ({}));
const Home = () => {
	const classes = useStyles();
	return (
		<>
			<Section1>
				<Navbar />
				<Jumbotron />
			</Section1>
			<Section2>
				<Container>
					<TextWrapper>
						<MainTitle>Produk Kami <br /> dengan Kualitas Terbaik </MainTitle>
						<SecondTitle>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Sit, expedita.
						</SecondTitle>
					</TextWrapper>
					<CardsWrapper>
						<CardProd
							nama={'Kopi Robusta'}
							img={robusta}
							desc={
								'Robusta memiliki citarasa pahit. Rasanya sangat simpel dan ini hanyalah kopi punya aroma tegas.'
							}
						/>
						<CardProd
							nama={'Kopi Arabika'}
							img={arabica}
							desc={
								'Arabika memiliki lebih banyak (rasa) citrus. Rasa kopi ini agak asam dan aroma simple'
							}
						/>
						<CardProd
							nama={'Kopi Excelsa'}
							img={excelsa}
							desc={
								'Kopi Excelsa mempunyai citarasa dan aroma yang dikategorikan kuat dan dominan pahit '
							}
						/>
					</CardsWrapper>
				</Container>
			</Section2>
		</>
	);
};

export default Home;
