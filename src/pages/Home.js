import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../stylesComp/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../img/logo.png';

const Section1 = styled.div`
	height: 100vh;
	background: linear-gradient(#ef962d, #fff 50%);
`;
const useStyles = makeStyles((theme) => ({}));
const Home = () => {
	useStyles();
	return (
		<Section1>
			<Navbar />
			<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:'100vh'}}>
				<div>
					<h2>Bingung Cari Produk Kopi Dampit ?</h2>
					<h3>Cari Di sini Aja</h3>
				</div>
            <div>
               <img src={logo} width="300px"/>
            </div>
			</div>
		</Section1>
	);
};

export default Home;
