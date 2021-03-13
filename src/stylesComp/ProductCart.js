import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import kopi from '../api/kopi';
import { getId } from '../api/userId';
import { useAuth } from '../config/Auth';
import ProductCartsWrapper from './ProductCartsWrapper';
import EmptyCartsWrapper from './EmptyCartWrapper';
import { setCount } from '../api/getCountCart';
import CircularProgress from '@material-ui/core/CircularProgress';

const CartWrapper = styled.div`
	align-items: center;
	justify-content: space-around;
	margin: 0 auto;
	margin-top: 6.5rem;
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	width: 100%;
`;

const ProductCart = () => {
	const IdUser = getId();
	const { authTokens } = useAuth();
	const [dataProduct, setDataProduct] = useState(null);
	const [openAlert, setOpenAlert] = useState(false);
	const [alertProdId, setAlertProdId] = useState();
	const [userInfo, setUserInfo] = useState();
	const [isPending, setIsPending] = useState(true);

	const handleClickAlertOpen = (e) => {
		setOpenAlert(true);
	};

	const handleAlertClose = async (e) => {
		if (e.target.textContent === 'Iya') {
			await deleteProductOnCart(alertProdId);
			await setCount(authTokens);
		}
		setOpenAlert(false);
	};

	const getProductOnCart = async () => {
		let dataGet = await kopi.get(`/api/carts/${IdUser}`, {
			headers: {
				Authorization: `Bearer ${authTokens}`,
			},
		});
		if (dataGet.data.message.length === 0) {
			setDataProduct(null);
		} else {
			setDataProduct(dataGet.data.message);
		}
		setIsPending(false);
	};

	const deleteProductOnCart = async (idProduct) => {
		let dataDel = await kopi.delete(`/api/carts/${idProduct}`, {
			headers: {
				Authorization: `Bearer ${authTokens}`,
			},
		});
		getProductOnCart();
	};

	const getUserInfo = async () => {
		let dataGet = await kopi.get(`/api/users/${IdUser}`, {
			headers: {
				Authorization: `Bearer ${authTokens}`,
			},
		});
		setUserInfo(dataGet.data.message);
		setIsPending(false);
	};

	useEffect(() => {
		getProductOnCart();
		getUserInfo();
	},);

	return (
		<CartWrapper>
			{dataProduct !== null ? (
				<>
					{isPending ? (
						<CircularProgress style={{ color: '#ef962d' }} />
					) : (
						<>
							<ProductCartsWrapper
								dataProduct={dataProduct}
								handleAlertClose={handleAlertClose}
								handleClickAlertOpen={handleClickAlertOpen}
								setAlertProdId={setAlertProdId}
								openAlert={openAlert}
								userInfo={userInfo}
								getProductOnCart={getProductOnCart}
							/>
						</>
					)}
				</>
			) : (
				<>
					{isPending ? (
						<CircularProgress style={{ color: '#ef962d' }} />
					) : (
						<EmptyCartsWrapper />
					)}
				</>
			)}
		</CartWrapper>
	);
};

export default ProductCart;
