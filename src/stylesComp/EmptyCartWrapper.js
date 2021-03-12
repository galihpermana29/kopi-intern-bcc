import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MainButton } from '../stylesComp/LoginSign';
import cartKosong from '../img/cartKosong.png';

const EmptyCartWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	flex-wrap: wrap;
	@media only screen and (min-width: 670px) {
		width: 60%;
	}
`;

const EmptyCartText = styled.div`
   width: 100%;
   @media only screen and (min-width: 670px) {
      width: inherit;
   }
`;

const EmptyImage = styled.img`
	max-width: 150px;
	width: 100%;
	margin: 0 auto;
	@media only screen and (min-width: 670px) {
		margin-left: 3rem;
	}
`;

const EmptyText = styled.h2`
	font-size: 2rem;
	text-align: center;
	margin: 2rem 0;
	@media only screen and (min-width: 670px) {
		text-align: left;
		font-size: 3rem;
	}
`;

const EmptyButtonWrapper = styled.div`
	width: 200px;
	margin: 0 auto;
	@media only screen and (min-width: 670px) {
		margin: 0;
	}
`;

const EmptyCartsWrapper = () => {
	return (
		<EmptyCartWrapper>
			<EmptyImage src={cartKosong} alt="cart kosong" />
			<EmptyCartText>
				<EmptyText>Yah! Keranjang kamu kosong</EmptyText>
				<EmptyButtonWrapper>
					<Link to={'/'}>
						<MainButton>Belanja Sekarang</MainButton>
					</Link>
				</EmptyButtonWrapper>
			</EmptyCartText>
		</EmptyCartWrapper>
	);
};

export default EmptyCartsWrapper;
