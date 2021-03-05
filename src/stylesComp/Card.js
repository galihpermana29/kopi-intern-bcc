import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import jumbotron1 from '../img/jumbotron2.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../config/Auth';

const CardWrapper = styled(Card)`
	/* display: flex;
   flex-direction: column;
   justify-content: space-between; */
	transition: 0.5s ease all;
	border: 1px solid white;
	&:hover {
		border: 1px solid #ef962d;
	}
	@media only screen and (min-width: 670px) {
		text-align: left;
	}
`;

const NameProduct = styled.h3`
	font-size: 2rem;
	margin: 1rem 0;
	font-family: 'Poppins';
`;

const DescProduct = styled.p`
	font-family: 'Poppins';
	font-size: 1.4rem;
	@media only screen and (min-width: 670px) {
		font-size: 1.5rem;
	}
`;

const BuyButton = styled(Button)`
	margin: 0 auto;
	border: 1px solid #ef962d;
	color: #ef962d;
	padding: 0.5rem 1.5rem;
	@media only screen and (min-width: 670px) {
		margin: 0;
	}
`;

const CardActionsWrapper = styled(CardActions)`
	/* border: 1px solid red; */
`;

const useStyles = makeStyles({
	root: {
		maxWidth: 320,
		textAlign: 'center',
	},
	media: {
		margin: '0 auto',
		width: '50%',
		height: 140,
		objectFit: 'cover',
	},
});

const CardProd = ({ nama, img, desc }) => {
	const { authTokens } = useAuth();
	const history = useHistory();

	const handleClick = () => {
		if (authTokens === null) {
			history.push('/login');
		} else {
         return;
      }
	};

	const classes = useStyles();
	return (
		<CardWrapper className={classes.root} elevation={0}>
			<div>
				<CardMedia
					className={classes.media}
					image={img}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<NameProduct>{nama}</NameProduct>
					<DescProduct>{desc}</DescProduct>
				</CardContent>
			</div>
			<CardActionsWrapper>
				<BuyButton onClick={handleClick}>Beli Sekarang</BuyButton>
			</CardActionsWrapper>
		</CardWrapper>
	);
};

export default CardProd;
