import React from 'react';
import Navbar from '../stylesComp/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Jumbotron, { Section1 } from '../stylesComp/Jumbotron';
import Section2Content, { Section2 } from '../stylesComp/Section2Content';
import { SliderData } from '../stylesComp/SliderData';
import Section3Content, { Section3 } from '../stylesComp/Section3Content';
import Section4Content, { Section4 } from '../stylesComp/Section4Content';
import { Footer } from '../stylesComp/Footer';

const useStyles = makeStyles((theme) => ({}));
const Home = () => {
	useStyles();

	return (
		<>
			<Section1 id="home">
				<Navbar />
				<Jumbotron />
			</Section1>
			<Section2 id="produk">
				<Section2Content />
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
