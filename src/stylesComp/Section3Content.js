import React, { useState } from 'react';
import {
	Container,
	TextWrapper,
	MainTitle,
	SecondTitle,
} from '../stylesComp/Section2Content';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { SliderData } from '../stylesComp/SliderData';
import section3bg from '../img/section3.png';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Section3 = styled.div`
	text-align: center;
	/* min-height: 100vh; */
	display: flex;
	align-items: center;
	/* border: 1px solid red; */
	background: url(${section3bg}) no-repeat center;
	background-size: 100% 100%;
	object-fit: cover;
`;

export const Slider = styled.div`
	position: relative;
	/* height: 100vh; */
	display: flex;
	justify-content: center;
	align-items: center;
	/* border: 1px solid green; */
	margin-top: 3rem;
	margin-bottom: 3rem;
	@media only screen and (min-width: 670px) {
		margin: 0 0 5rem 0;
	}
`;

export const ArrowBack = styled(ArrowBackIosIcon)`
	position: absolute;
	top: 50%;
	left: 32px;
	font-size: 3rem;
	color: #000;
	z-index: 10;
	cursor: pointer;
	user-select: none;
	color: white;
`;
export const ArrowForward = styled(ArrowForwardIosIcon)`
	position: absolute;
	top: 50%;
	right: 32px;
	font-size: 3rem;
	color: #000;
	z-index: 10;
	cursor: pointer;
	user-select: none;
	color: white;
`;

export const ImageWrapper = styled.div`
	/* border: 1px solid purple; */
	width: 100%;
	min-width: 200px;
	max-width: 600px;
	/* margin: 1rem auto; */
`;

export const ImageSlides = styled.div`
	opacity: ${({ index, current }) => (index === current ? 1 : 0)};
	transition-duration: 1s;
	transform: ${({ index, current }) =>
		index === current ? 'scale(1)' : 'inherit'};
	/* @media only screen and (min-width: 670px) {
      opacity: 1;
   } */
`;

export const Image = styled.img`
	width: 100%;
`;

const useStyles = makeStyles((theme) => ({}));

const Section3Content = ({slides}) => {
   const classes = useStyles();
	// console.log(tes);
	const [current, setCurrent] = useState(0);
	const length = 5;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<Container>
			<TextWrapper>
				<MainTitle style={{ color: 'white' }}>
					Galeri Kami <br />
					di Kebun Kopi Dampit
				</MainTitle>
				<SecondTitle style={{ color: 'white' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
					amet!
				</SecondTitle>
			</TextWrapper>
			<Slider>
				<ArrowBack onClick={prevSlide} />
				<ArrowForward onClick={nextSlide} />
				<ImageWrapper>
					{SliderData.map((slide, index) => {
						return (
							<ImageSlides index={index} current={current} key={index}>
								{index === current && (
									<Image
										src={slide.image}
										alt="travel image"
										className="image"
									/>
								)}
							</ImageSlides>
						);
					})}
				</ImageWrapper>
			</Slider>
		</Container>
	);
};

export default Section3Content;
