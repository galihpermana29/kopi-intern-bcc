import React, { useEffect, useState } from 'react';
import { Footer } from '../stylesComp/Footer';
import styled from 'styled-components';
import { useAuth } from '../config/Auth';
import invoiceImg from '../img/invoiceImg.png';
import kopi from '../api/kopi';
import { getId } from '../api/userId';

const InvoiceContent = styled.div`
	min-height: 100vh;
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InvoiceWrapper = styled.div`
	align-items: center;
	justify-content: space-around;
	margin: 6.5rem auto 3rem auto;
	display: flex;
	flex-wrap: wrap;
	border: 1px solid #ef962d;
	border-radius: 1rem;
	box-sizing: border-box;
	padding: 4rem;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
`;

const LeftContent = styled.div`
	margin-right: 4rem;
	max-width: 400px;
	margin-bottom: 2rem;
	display: flex;
	flex-direction: column;
	& > * {
		margin-bottom: 0.5rem;
	}
`;

const RightContent = styled.div`
	max-width: 400px;
	& > * {
		margin-bottom: 1rem;
	}
`;

const ImgInvoice = styled.img`
	max-width: 300px;
	width: 100%;
	margin: 0 auto 2rem auto;
`;

const Invoice = () => {
	const IdUser = getId();
	const { authTokens } = useAuth();
	const [data, setData] = useState(null);
	const [userInfo, setUserInfo] = useState();
	const getTrans = async () => {
		let dataGet = await kopi.get(`/api/transactions/${IdUser}`, {
			headers: {
				Authorization: `Bearer ${authTokens}`,
			},
		});
		setData(dataGet.data.message);
	};

	const getUserInfo = async () => {
		let dataGet = await kopi.get(`/api/users/${IdUser}`, {
			headers: {
				Authorization: `Bearer ${authTokens}`,
			},
		});
		setUserInfo(dataGet.data.message);
	};

	useEffect(async () => {
		await getTrans();
		await getUserInfo();
	}, []);

	return (
		<>
			<InvoiceContent>
				<InvoiceWrapper>
               
					{data !== null ? (
						<>
							<LeftContent>
								<ImgInvoice src={invoiceImg} alt="" />
								<h3>Terima kasih sudah membeli produk kami</h3>
								<p>
									Hubungi di Nomor Ini Untuk Detail tracking Kopi Anda
								</p>
								<p>Telepon/Whatsapp : 081237862423</p>
							</LeftContent>
							<RightContent>
								{userInfo && (
									<>
										<h2>Invoice</h2>
										<p>User : {userInfo.name}</p>
										<p>Nomor Telepon : {userInfo.phone}</p>
										<p>
											Invoice Code : <b>{data[0].invoice}</b>
										</p>
										<h2>Total: {data[0].total_price}</h2>
									</>
								)}
							</RightContent>
						</>
					) : ''}
				</InvoiceWrapper>
				;
			</InvoiceContent>
			<Footer>
				<p> Develop by kelompok 4 with love 💙</p>
			</Footer>
		</>
	);
};

export default Invoice;
