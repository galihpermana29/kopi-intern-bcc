import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import robusta from '../img/robusta.jpg';
import TextField from '@material-ui/core/TextField';
import { Input, MainButton } from '../stylesComp/LoginSign';
import kopi from '../api/kopi';

import { getId } from '../api/userId';
import { useAuth } from '../config/Auth';
import { Link } from 'react-router-dom';
import AlertDialog from './Alert';
// import useGetProductOnCart from '../api/useGetProductOnCart';

const CartWrapper = styled.div`
	/* border: 1px solid red; */
	align-items: center;
	justify-content: space-around;
	margin: 0 auto;
	margin-top: 6.5rem;
	display: flex;
	flex-wrap: wrap;
	height: 100%;
`;

const ProductCartWrapper = styled.div`
	/* border: 1px solid red; */
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
	/* border: 1px solid blue; */
	width: 100%;
`;

const ProductWrapper = styled.div`
	/* border: 1px solid #ef962d; */
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
	/* border: 1px solid red; */
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
	/* border: 1px solid red; */
`;

const ImgProd = styled.img`
	width: 100px;
	/* border: 1px solid red; */
`;

const ClosePriceWrapper = styled.div`
	/* border: 1px solid red; */
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
	/* border: 1px solid red; */
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

const CheckoutForm = styled.form`
	width: 100%;
	font-size: 1.5rem;
	padding: 1.2rem;
	& > * {
		margin-top: 1.5rem;
	}
	@media only screen and (min-width: 670px) {
		padding: 0;
	}
`;

const ChekoutWrapper = styled.div`
	width: 100%;
	border: 1px solid #ef962d;
	box-sizing: border-box;
	padding: 1rem;
	margin: 3rem 0;
	border-radius: 1rem;
	& > * {
		margin-top: 1rem;
	}
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
	@media only screen and (min-width: 670px) {
		width: 35%;
		margin: 0;
		padding: 2.5rem;
	}
`;

const AddressInput = styled(TextField).attrs(() => ({
	variant: 'standard',
	InputProps: {
		style: { fontSize: '1.2rem', fontFamily: 'inherit' },
	},
	InputLabelProps: { style: { fontSize: '1.2rem', fontFamily: 'inherit' } },
}))`
	width: 100%;
	&:first-child {
		margin-top: 2rem;
	}
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
`;

const ProductCart = () => {
	const IdUser = getId();
	const { authTokens } = useAuth();
	const [dataProduct, setDataProduct] = useState(null);
	const [openAlert, setOpenAlert] = useState(false);
	const [alertProdId, setAlerProdId] = useState();
	const [userInfo, setUserInfo] = useState();

	const handleClickAlertOpen = (e) => {
		setOpenAlert(true);
	};

	const handleAlertClose = (e) => {
		if (e.target.textContent === 'Iya') {
			deleteProductOnCart(alertProdId);
		}
		setOpenAlert(false);
	};

	const getProductOnCart = async () => {
		await kopi
			.get(`/api/carts/${IdUser}`, {
				headers: {
					Authorization: `Bearer ${authTokens}`,
				},
			})
			.then((res) => {
				if (res.data.message.length === 0) {
					setDataProduct(null);
				} else {
					console.log(res.data.message);
					setDataProduct(res.data.message);
				}
			});
	};

	const deleteProductOnCart = async (idProduct) => {
		await kopi
			.delete(`/api/carts/${idProduct}`, {
				headers: {
					Authorization: `Bearer ${authTokens}`,
				},
			})
			.then((res) => {
				getProductOnCart();
				console.log(res);
				console.log(dataProduct);
			});
	};

	const getUserInfo = async () => {
		await kopi
			.get(`/api/users/${IdUser}`, {
				headers: {
					Authorization: `Bearer ${authTokens}`,
				},
			})
			.then((res) => {
				console.log(res);
				setUserInfo(res.data.message);
			});
	};

	useEffect(() => {
		getProductOnCart();
		getUserInfo();
	}, [1]);

	return (
		<CartWrapper>
			{dataProduct !== null ? (
				<>
					<ProductCartWrapper>
						<h2>Product Forms</h2>
						<CartForm>
							{dataProduct.map(
								({
									id,
									id_product,
									id_user,
									product_name,
									quantity,
								}) => (
									<ProductWrapper key={id}>
										<ImgTitleWrapper>
											<ImgProd src={robusta} alt="" width="100%" />
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
													setAlerProdId(id_product);
												}}
											/>
											<PriceProd>45,000</PriceProd>
										</ClosePriceWrapper>
									</ProductWrapper>
								)
							)}

							<TotalWrapper>
								<p>Total :</p>
								<h3>99,000</h3>
							</TotalWrapper>
						</CartForm>
						<AlertDialog
							handleClickAlertOpen={handleClickAlertOpen}
							handleAlertClose={handleAlertClose}
							openAlert={openAlert}
						/>
					</ProductCartWrapper>

					<ChekoutWrapper>
						<h2>Checkout Forms</h2>
						{userInfo && (
							<CheckoutForm>
								<AddressInput
									id="standard-basic"
									label="Alamat Pengiriman"
								/>
								<AddressInput
									id="standard-read-only-input"
									label="Metode Pembayaran"
									defaultValue="Bayar di tempat"
									InputProps={{
										readOnly: true,
									}}
								/>
								<AddressInput
									id="standard-basic"
									label="Nomor Telepon"
                           defaultValue={userInfo.phone}
								/>
								<MainButton style={{ fontSize: '1.3rem' }}>
									CHECKOUT
								</MainButton>
							</CheckoutForm>
						)}
					</ChekoutWrapper>
				</>
			) : (
				<>
					<h2>Yah! Keranjang kamu kosong</h2>
					<Link to={'/'}>Belanja sekarang</Link>
				</>
			)}
		</CartWrapper>
	);
};

export default ProductCart;
