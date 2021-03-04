import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../stylesComp/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Jumbotron, { Section1 } from '../stylesComp/Jumbotron';
import Section2Content, { Section2 } from '../stylesComp/Section2Content';
import { SliderData } from '../stylesComp/SliderData';
import Section3Content from '../stylesComp/Section3Content';
import { Section3 } from '../stylesComp/Section3Content';

const useStyles = makeStyles((theme) => ({}));

const Home = () => {
	const classes = useStyles();
	return (
		<>
			<Section1>
				<Navbar />
				<Jumbotron />
			</Section1>
			<Section2>
				<Section2Content />
			</Section2>
			<Section3>
				<Section3Content slides={SliderData} />
			</Section3>
		</>
	);
};

export default Home;
