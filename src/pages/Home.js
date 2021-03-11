import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../stylesComp/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Jumbotron, { Section1 } from '../stylesComp/Jumbotron';
import Section2Content, {
	Section2,
	Container,
	MainTitle,
	SecondTitle,
} from '../stylesComp/Section2Content';
import { SliderData } from '../stylesComp/SliderData';
import Section3Content, { Section3 } from '../stylesComp/Section3Content';
import Section4Content, { Section4 } from '../stylesComp/Section4Content';
import { Footer } from '../stylesComp/Footer';
import { useAuth } from '../config/Auth';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { getId } from '../api/userId';




const Home = () => {
   const useStyles = makeStyles((theme) => ({}));
	useStyles();
   
	return (
		<>
			<Section1 id="home">
				<Navbar />
				<Jumbotron />
			</Section1>
			<Section2 id="produk">
				<Section2Content/>
			</Section2>
			<Section3 id="galeri">
				<Section3Content slides={SliderData} />
			</Section3>
			<Section4 id="about">
				<Section4Content />
			</Section4>
			<Footer>
				<p> Develop by kelompok 4 with love 💙</p>
			</Footer>
		</>
	);
};

export default Home;
