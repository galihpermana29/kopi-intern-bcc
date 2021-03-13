import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { DescProduct, NameProduct } from './Card';
import kopi from '../api/kopi';
import { getId } from '../api/userId';
import { useAuth } from '../config/Auth';
import NotificationCustom from './Notification';
import { getCount, setCount } from '../api/getCountCart';

const ModalImg = styled.img`
	min-width: 100px;
	width: 100%;
	max-width: 300px;
	margin: 0 auto;
	@media only screen and (min-width: 670px) {
		margin-right: 2rem;
	}
`;

const ModalTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const PriceProduct = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 1rem;
`;

const QuantityInput = styled.input`
	font-size: 1.5rem;
	width: 35px;
	height: 35px;
	display: block;
	margin: 1rem 0;
	text-align: center;
`;

const ModalForm = styled.form``;

const AddtoCartButton = styled(Button)`
	margin: 0 auto;
	background-color: #ef962d;
	justify-self: center;
	text-align: center;
	color: white;
`;

const ModalContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 670px) {
		flex-direction: row;
		align-items: center;
		height: 300px;
		width: 700px;
	}
`;

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

const ModalWrapper = ({ nama, img, desc, harga, id, open, handleClose }) => {
	const classes = useStyles();
	const IdUser = getId();
	const { authTokens } = useAuth();
	const [ProductName, setProductName] = useState(nama);
	const [IdProduct, setIdProduct] = useState(id);
	const [Quantity, setQuantity] = useState(0);
	const [pCart, setPCart] = useState();
	const [openNotif, setOpenNotif] = useState(false);
	const [notifMessage, setNotifMessage] = useState('');

	const showNotif = () => {
		setOpenNotif(true);
	};

	const closeNotif = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpenNotif(false);
	};

	const getProductOnCarts = async (res) => {
		let dataGet = await kopi.get(`/api/carts/${IdUser}`, {
			headers: {
				Authorization: `Bearer ${authTokens}`,
			},
		});
		setPCart(dataGet.data.message);
	};

	const handleAddToCart = async (e) => {
		if (pCart.length > 0) {
			for (let i = 0; i < pCart.length; i++) {
				if (pCart[i].product_name === ProductName) {
					await validation(pCart[i].product_name === ProductName);
					return;
				}
			}
			await validation(false);
			return;
		} else {
			await validation(false);
			return;
		}
	};

	const validation = async (isProd) => {
		if (Quantity === undefined || Quantity === NaN || Quantity <= 0) {
			return;
		} else {
			if (isProd) {
				let dataPut = await kopi.put(
					'/api/carts/',
					{
						idProduct: IdProduct,
						quantity: Quantity,
						idUser: IdUser,
					},
					{
						headers: {
							Authorization: `Bearer ${authTokens}`,
						},
					}
				);
				setNotifMessage('Produk berhasil diupdate');
				showNotif();
				handleClose();
				setQuantity(0);
				return;
			} else {
				let dataPost = await kopi.post(
					'/api/carts/',
					{
						productName: ProductName,
						idProduct: IdProduct,
						imgProduct: img,
						priceProduct: harga,
						idUser: IdUser,
						quantity: Quantity,
					},
					{
						headers: {
							Authorization: `Bearer ${authTokens}`,
						},
					}
				);
				setNotifMessage('Produk berhasil ditambahkan ke keranjang');
				showNotif();
				handleClose();
				setQuantity(0);
				return;
			}
		}
	};

	useEffect(() => {
		if (authTokens) getProductOnCarts();
	}, [open]);

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={() => {
					handleClose();
					setQuantity(0);
				}}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<ModalContentWrapper>
							<ModalImg
								src={`${process.env.PUBLIC_URL}/assets/${img}.jpg`}
								alt="image"
								width="100px"
							/>
							<ModalTextWrapper>
								<NameProduct>{nama}</NameProduct>
								<PriceProduct>Rp.{harga}/250gr</PriceProduct>
								<DescProduct>{desc}</DescProduct>
								<ModalForm>
									<QuantityInput
										type="number"
										name="quantity"
										id="quantity"
										min="1"
										max="5"
										placeholder="0"
										required
										onChange={(e) =>
											setQuantity(parseInt(e.target.value))
										}
									/>
									<AddtoCartButton
										variant="contained"
										size="large"
										startIcon={<ShoppingCartIcon />}
										onClick={(e) => handleAddToCart(e)}
									>
										Masukkan ke keranjang
									</AddtoCartButton>
								</ModalForm>
							</ModalTextWrapper>
						</ModalContentWrapper>
					</div>
				</Fade>
			</Modal>
			<NotificationCustom
				openNotif={openNotif}
				showNotif={showNotif}
				closeNotif={closeNotif}
				message={notifMessage}
			/>
		</div>
	);
};

export default ModalWrapper;
