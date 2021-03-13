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


export const Section3 = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	background: url(${section3bg}) no-repeat center;
	background-size: 100% 100%;
	object-fit: cover;
`;

export const Slider = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
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
	width: 100%;
	min-width: 200px;
	max-width: 600px;
`;

export const ImageSlides = styled.div`
	opacity: ${({ index, current }) => (index === current ? 1 : 0)};
	transition-duration: 1s;
	transform: ${({ index, current }) =>
		index === current ? 'scale(1)' : 'inherit'};
`;

export const Image = styled.img`
	width: 100%;
`;


const Section3Content = ({slides}) => {
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
					Foto-foto terbaik yang kami ambil dari kebun kopi tersebut
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
