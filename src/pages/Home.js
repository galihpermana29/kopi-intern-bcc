import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../stylesComp/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import jumbotron from '../img/jumbotron.png';
import jumbotron2 from '../img/jumbotron2.png';

const Section1 = styled.div`
	height: 100vh;
	background: linear-gradient(#ef962d, #fff 50%);
   border: 1px solid transparent;
`;

const JumbotronWrapper = styled.div`
	/* border: 1px solid red; */
	align-items: center;
	justify-content: center;
   margin: 0 auto;
   margin-top: 6.5rem;
   display: flex;
   width: 80%;
   height: 85%;
   /* flex-direction: column-reverse; */
   flex-wrap: wrap;
   @media only screen and (min-width: 670px) {
      flex-direction: row;
      flex-wrap: wrap;
   }
`;

const JumbotronTextWrapper = styled.div`
   order: 2;
   /* border: 1px solid red; */
   height: 50%;
   text-align: center;
   @media only screen and (min-width: 670px) {
      order: inherit;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      padding: 2rem;
      box-sizing: border-box;
   }
`
const JumbotronImgWrapper = styled.div`
   /* width: 100%; */
   display: flex;
   align-items: center;
   height: 50%;
   /* border: 1px solid yellow; */
   @media only screen and (min-width: 670px) {
      width: 50%;
   }
`

const JumbotronMainTitle = styled.h2`
   font-size: 2.2rem;
   margin-bottom: .5rem;
   @media only screen and (min-width: 670px) {
      font-size: 3.3rem;
      width: 100%;
      max-width: 350px;
   }
`

const JumbotronSecondTitle = styled.h3`
   font-weight: 500;
   margin-bottom: 1rem;
   font-size: 2rem;
   @media only screen and (min-width: 670px) {
      font-size: 2.2rem;
      margin-bottom: 2rem;
   }
`

const JumbotronDesc = styled.p`
   font-size: 1.4rem;
   margin-bottom: 2rem;
   @media only screen and (min-width: 670px) {
      font-size: 1.5rem;
      margin-bottom: 2.5rem;
   }
`

const JumbotronButton = styled(Link)`
   background-color: #EF962D;
   height: 40px;
   width: 140px;
   margin: 0 auto;
   line-height: 40px;
   display: block;
   text-decoration: none;
   color: #fff;
   border-radius: .5rem;
   font-size: 1.3rem;
   transition: 0.2s all;
   @media only screen and (min-width: 670px) {
      margin: inherit;
      text-align: center;
   }

   &:hover{
      background-color: #d68b34;
   }
`

const JumbotronImg = styled.img`
   width: 100%;
   /* height: 100%; */
   max-width: 500px;
   /* border: 1px solid green; */
   margin: 0 auto;
   /* object-fit: cover; */
`

const useStyles = makeStyles((theme) => ({}));
const Home = () => {
	useStyles();
	return (
		<Section1>
			<Navbar />
			<JumbotronWrapper>
				<JumbotronTextWrapper>
					<JumbotronMainTitle>Bingung Cari Produk Kopi Dampit ?</JumbotronMainTitle>
					<JumbotronSecondTitle>Cari Di sini Aja</JumbotronSecondTitle>
					<JumbotronDesc>
						Kopi khas dampit dengan kualitas terbaik! kamu cukup melakukan
						pembelian di sini, Maka kurir kami akan langsung ke tempatmu.
					</JumbotronDesc>
					<JumbotronButton to="/">Beli Sekarang</JumbotronButton>
				</JumbotronTextWrapper>
				<JumbotronImgWrapper>
					<JumbotronImg src={jumbotron2}/>
				</JumbotronImgWrapper>
			</JumbotronWrapper>
		</Section1>
	);
};

export default Home;
