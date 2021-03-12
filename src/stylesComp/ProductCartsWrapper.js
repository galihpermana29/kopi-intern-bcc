import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';
import AlertDialog from './Alert';

const ProductCartWrapper = styled.div`
	padding: 1rem;
	box-sizing: border-box;
	& > *:first-child {
		margin-bottom: 4rem;
	}
	@media only screen and (min-width: 670px) {
		width: 50%;
		height: 100%;
		padding: 2rem;
	}
`;

const CartForm = styled.form`
	width: 100%;
`;

const ProductWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.5rem;
	border-radius: 1rem;
	overflow: hidden;
	padding: 1rem 0;
	transition: 0.5s ease all;
	border: 1px solid #fff;
	&:hover {
		border: 1px solid #ef962d;
		transform: scale(0.98);
	}
`;

const ImgTitleWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 60%;
`;

const NameProd = styled.h3`
	font-size: 1.5rem;
	width: 80px;
	font-weight: 600;
`;

const QuantityInput = styled.input`
	width: 10%;
	margin-left: 1rem;
	text-align: center;
`;

const ImgProd = styled.img`
	width: 100px;
`;

const ClosePriceWrapper = styled.div`
	width: 30%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	flex-direction: column;
	padding-right: 1rem;
`;

const DeleteIcon = styled(ClearIcon)`
	cursor: pointer;
`;

const PriceProd = styled.h4`
	font-size: 1.5rem;
	font-weight: 600;
`;

const TotalWrapper = styled.div`
	border-top: 1px solid #ffe3c1;
	padding-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: 3rem;
	& > *:not(:last-child) {
		margin-right: 1rem;
	}
	& > :last-child {
		font-weight: 600;
	}
`;

const ProductCartsWrapper = ({dataProduct, handleAlertClose, handleClickAlertOpen, setAlertProdId, openAlert}) => {
   let total = 0;
	return (
		<ProductCartWrapper>
			<h2>Product Forms</h2>
			<CartForm>
				{dataProduct.map(
					({
						id,
						id_product,
						id_user,
						product_name,
						product_img,
						product_price,
						quantity,
					}) => (
						<ProductWrapper key={id}>
							<ImgTitleWrapper>
								<ImgProd
									src={`${process.env.PUBLIC_URL}/assets/${product_img}.jpg`}
									alt=""
									width="100%"
								/>
								<NameProd>{product_name}</NameProd>
							</ImgTitleWrapper>
							<QuantityInput
								type="number"
								name="quantity"
								id="quantity"
								value={quantity}
								disabled
							/>
							<ClosePriceWrapper>
								<DeleteIcon
									onClick={() => {
										handleClickAlertOpen();
										setAlertProdId(id_product);
									}}
								/>
								<PriceProd>{product_price * quantity}</PriceProd>
							</ClosePriceWrapper>
						</ProductWrapper>
					)
				)}

				<TotalWrapper>
					{dataProduct.forEach((data) => {
						total = total + data.product_price * data.quantity;
					})}
					<p>Total :</p>
					<h3>{total}</h3>
				</TotalWrapper>
			</CartForm>
			<AlertDialog
				handleClickAlertOpen={handleClickAlertOpen}
				handleAlertClose={handleAlertClose}
				openAlert={openAlert}
			/>
		</ProductCartWrapper>
	);
};

export default ProductCartsWrapper;
