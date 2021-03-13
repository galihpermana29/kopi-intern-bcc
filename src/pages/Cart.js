import React from 'react';
import { Footer } from '../stylesComp/Footer';
import styled from 'styled-components';
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
