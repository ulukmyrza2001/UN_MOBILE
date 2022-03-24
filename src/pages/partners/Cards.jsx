import React from 'react';
import styled from 'styled-components';
import media from '../../helpers/media';
import logo1 from '../../assets/logo/gic.png';
import logo2 from '../../assets/logo/ait.png';
import logo3 from '../../assets/logo/mrc.png';
import logo4 from '../../assets/logo/ird.png';
import logo5 from '../../assets/logo/gpml.png';
import logo6 from '../../assets/logo/escap.png';

const partnerList = [
	{
		logo: logo1,
		title: 'Geoinformatics Center of Asian Institute of Technology (GIC/AIT)',
		url: 'https://geoinfo.ait.ac.th/',
	},
	{
		logo: logo2,
		title: 'Asian Institute of Technology (AIT)',
		url: 'https://www.ait.ac.th/',
	},
	{
		logo: logo3,
		title: 'Mekong River Commission Secretariat (MRCS)',
		url: 'https://www.mrcmekong.org/'
	},
	{
		logo: logo4,
		title: 'French National Research Institute for Sustainable Development',
		url: 'https://en.ird.fr/',
	},
	{
		logo: logo5,
		title: 'Global Partnership On Marine Litter',
		url: 'https://www.gpmarinelitter.org/',
	},
	{
		logo: logo6,
		title: 'Economic and Social Commission for Asia and the Pacific',
		url: 'https://www.unescap.org/',
	},

]

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 24px;

	${media.desktop`
    	justify-content:space-around;
    `}
`;

const Title = styled.h3`
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 28px;
	text-align: center;
	color: #000000;
	display: block;
	max-width: 275px;

	${media.desktop`
		margin:0 auto;
	`}

	${media.tablet`
		margin:0 auto;
	`}

	${media.mobile`
		font-size: 17px;
	`}
`;

const Card = styled.div`
	position: relative;
	width: 330px;
	height: 250px;
	padding: 24px;
	border: 1px solid #e2e2e2;
	box-sizing: border-box;
	border-radius: 8px;
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;

	
	${media.desktop`
		width:600px;
		margin:0 auto;
    `}

	${media.tablet`
		width: 90%;
	    margin:0 auto;
    `}
	
	${media.mobile`
    	width:100%;
    `}
`;

const Img = styled.img`
	max-height: 80px;
	max-width: 280px;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 100%;
`;

const HrefButton = styled.button`
	border: none;
	background-color: transparent;
	font-family: Mulish;
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	color: #1871e5;
	cursor: pointer;

	span {
		transition: 0.2s;
	}

	&:hover span {
		margin-left: 10px;
	}

	${media.tablet`
	    left: 60%;
    `}
	
	${media.mobile`
    	left: 40%;
    `}
`;

const Cards = () => {
	function openInNewTab(url) {
		window.open(url, '_blank').focus();
	}

	return (
		<Content>
			{partnerList.map(({ title, logo, url }) => (
				<Card key={title}>
					<Img src={logo} />
					<Title>{title}</Title>
					<ButtonContainer>
						<HrefButton onClick={() => openInNewTab(url)}>
							View website <span className='span'>→</span>
						</HrefButton>
					</ButtonContainer>
				</Card>
			))}
		</Content>
	);
}
export default Cards;
