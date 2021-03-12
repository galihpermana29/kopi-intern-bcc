import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import {  MainButton } from '../stylesComp/LoginSign';

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


const CheckoutCartsWrapper = ({userInfo}) => {
	return (
		<ChekoutWrapper>
			<h2>Checkout Forms</h2>
			{userInfo && (
				<CheckoutForm>
					<AddressInput id="standard-basic" label="Alamat Pengiriman" />
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
					<MainButton style={{ fontSize: '1.3rem' }}>CHECKOUT</MainButton>
				</CheckoutForm>
			)}
		</ChekoutWrapper>
	);
};

export default CheckoutCartsWrapper;
