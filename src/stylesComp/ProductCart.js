import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import kopi from '../api/kopi';
import { getId } from '../api/userId';
import { useAuth } from '../config/Auth';
import ProductCartsWrapper from './ProductCartsWrapper';
import CheckoutCartsWrapper from './CheckoutCartsWrapper';
import EmptyCartsWrapper from './EmptyCartWrapper';

const CartWrapper = styled.div`
	align-items: center;
	justify-content: space-around;
	margin: 0 auto;
	margin-top: 6.5rem;
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	/* border: 1px solid red; */
	width: 100%;
`;


const ProductCart = () => {
	const IdUser = getId();
	const { authTokens } = useAuth();
	const [dataProduct, setDataProduct] = useState(null);
	const [openAlert, setOpenAlert] = useState(false);
	const [alertProdId, setAlertProdId] = useState();
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
					<ProductCartsWrapper
						dataProduct={dataProduct}
						handleAlertClose={handleAlertClose}
						handleClickAlertOpen={handleClickAlertOpen}
						setAlertProdId={setAlertProdId}
						openAlert={openAlert}
					/>
					<CheckoutCartsWrapper userInfo={userInfo} />
				</>
			) : (
				<>
					<EmptyCartsWrapper/>
				</>
			)}
		</CartWrapper>
	);
};

export default ProductCart;
