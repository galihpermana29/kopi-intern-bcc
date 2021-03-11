import React from 'react';
import Navbar from '../stylesComp/Navbar';
import { Footer } from '../stylesComp/Footer';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import robusta from '../img/robusta.jpg';
import TextField from '@material-ui/core/TextField';
import { Input, MainButton } from '../stylesComp/LoginSign';
import ProductCart from '../stylesComp/ProductCart';

const CartContent = styled.div`
	min-height: 100vh;
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Cart = () => {
	

	return (
		<>
			<Navbar />
			<CartContent>
            <ProductCart/>
			</CartContent>
			<Footer>
				<p> Develop by kelompok 4 with love 💙</p>
			</Footer>
		</>
	);
};

export default Cart;
