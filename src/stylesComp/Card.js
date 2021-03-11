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
import kopi from '../api/kopi';
import ModalWrapper from './Modal';

const CardWrapper = styled(Card)`
	transition: 0.5s ease all;
	border: 1px solid white;
	&:hover {
		border: 1px solid #ef962d;
	}
	@media only screen and (min-width: 670px) {
		text-align: left;
	}
`;

export const NameProduct = styled.h3`
	font-size: 2rem;
	margin: 1rem 0;
	font-family: 'Poppins';
`;

export const DescProduct = styled.p`
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

const CardActionsWrapper = styled(CardActions)``;

const useStyles = makeStyles((theme) => ({
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
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	button: {
		margin: '0 auto',
	},
}));

const CardProd = ({ nama, img, desc, harga, id }) => {
	const { authTokens } = useAuth();
	const history = useHistory();
	const [open, setOpen] = useState(false);
   // const [ProductName, setProductName] = useState('');
   // const [IdProduct, setIdProduct] = useState();
   // const [IdUser, setIdUser] = useState();
   // const [Quantity, setQuantity] = useState();

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = async () => {
		setOpen(false);
		// await kopi
		// 	.post('/api/carts', {
		// 		productName: ProductName,
		// 		idProduct: IdProduct,
		// 		idUser: IdUser,
		// 		quantity: Quantity,
		// 	})
		// 	.then((res) => {
            
      //       console.log(res)
		// 	});
	};

	const handleClick = (e) => {
		if (authTokens === null) {
			history.push('/login');
		} else {
			handleOpen();
			return;
		}
	};

	const classes = useStyles();
	return (
		<>
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
					<BuyButton onClick={(e) => handleClick(e)}>
						Beli Sekarang
					</BuyButton>
				</CardActionsWrapper>
			</CardWrapper>
			<ModalWrapper
				nama={nama}
				img={img}
				desc={desc}
				harga={harga}
				id={id}
				open={open}
				handleClose={handleClose}
			/>
		</>
	);
};

export default CardProd;
