import React, { useState } from 'react';
import styled from 'styled-components';
import Section2Content, {
	Section2,
	Container,
	MainTitle,
	SecondTitle,
} from '../stylesComp/Section2Content';
import logo from '../img/logo.png';

export const Section4 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	margin: 3rem 0;
	text-align: center;
	@media only screen and (min-width: 670px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	/* text-align: center; */
	/* border: 1px solid green; */
	& > * {
		margin-bottom: 2rem;
	}
`;

const TextandLogoWrapper = styled.div`
	@media only screen and (min-width: 670px) {
		/* border: 1px solid red; */
		max-width: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: left;
	}
`;

const Logo = styled.img`
	/* border: 1px solid green; */
	margin-bottom: 2rem;
	@media only screen and (min-width: 670px) {
		margin-right: 4rem;
	}
`;

const Section4Content = () => {
	return (
		<Container>
			<Wrapper>
				<MainTitle>Tentang Kami</MainTitle>
				<TextandLogoWrapper>
					<Logo src={logo} alt="logo" width="200px" />
					<SecondTitle>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis, vel harum! Commodi maiores voluptates velit,
						inventore in, repudiandae cumque quam provident consectetur
						necessitatibus repellat iusto, itaque explicabo eligendi
						nostrum dolor?
					</SecondTitle>
				</TextandLogoWrapper>
			</Wrapper>
		</Container>
	);
};

export default Section4Content;
