import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	/* justify-content: center; */
	/* border: 1px solid red; */
	position: relative;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	/* border: 5px solid green; */
	flex-wrap: wrap;
	position: relative;
   min-height: 100vh;
	width: 100%;
	@media only screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
		/* border: 5px solid green; */
		justify-content: space-between;
      /* align-items: center; */
		height: 100%;
      /* height: 100vh; */
	}
`;

export const ImgWrapper = styled.div`
	/* width: 100%; */
	width: 100%;
	/* border: 5px solid yellow; */
	position: relative;
	@media only screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
		/* border: 5px solid yellow; */
		width: 55%;
      /* height: 100%; */
      /* min-height: 100vh; */
	}
`;

export const ImgLogin = styled.img`
	width: 100%;
   object-fit: cover;
	background-position: center;
	@media only screen and (min-width: 768px) {
		width: 100%;
	}
`;

export const TextWrapper = styled.div`
	background: white;
	/* height: 300px; */
	position: relative;
	bottom: 50px;
	/* left: 10px; */
	right: 10px;
	box-sizing: border-box;
	padding: 2rem;
	margin: 0 1rem;
	border-radius: 2rem;
	width: 100%;
	@media only screen and (min-width: 768px) {
		width: 45%;
		/* border: 5px solid green; */
		position: static;
		margin: inherit;
		padding: 5rem;
      align-self: center;
	}
`;

export const MainForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const Input = styled(TextField).attrs(() => ({
	variant: 'outlined',
	InputProps: { style: { fontSize: '1.3rem', fontFamily: 'inherit', height: '50px' } },
	InputLabelProps: { style: { fontSize: '1.3rem', fontFamily: 'inherit' } },
}))`
	width: 100%;
	&:first-child {
		margin-top: 2rem;
	}
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
`;

export const MainButton = styled.button`
	background-color: #ef962d;
	font-weight: bold;
	color: #fff;
	outline: none;
	border: none;
	padding: 1.3rem 0;
	font-size: 1.5rem;
	font-family: inherit;
	border-radius: 0.5rem;
	transition: 0.2s all;
	width: 100%;
	&:hover {
		cursor: pointer;
		background-color: #d68b34;
	}
`;

export const SecondaryButton = styled(Link)`
	background-color: #fff;
	font-weight: bold;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ef962d;
	outline: none;
	border: 1px solid #ef962d;
	padding: 1rem 0;
	border-radius: 0.5rem;
	transition: 0.2s all;
	&:hover {
		cursor: pointer;
		background-color: #ef962d;
		color: #fff;
	}
`;

export const MainTitle = styled.h2`
   @media only screen and (min-width: 768px) {
		font-size: 3rem;
	}
`

export const SubTitle = styled.p`
   @media only screen and (min-width: 768px) {
		font-size: 1.5rem;
	}
`
