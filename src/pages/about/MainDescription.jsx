import React from 'react';
import styled from 'styled-components';
import imgDesc from '../../assets/descriptionImg.jpeg';
import UN from '../../assets/un.png';
import media from '../../helpers/media';


const Container = styled.div`
	padding: 80px 0 100px 0;
	max-width: 800px;
	margin: 0 auto;

	${media.tablet`
    	padding: 80px 14px 100px 14px;
    `}
	${media.mobile`
    	padding: 80px 24px 100px 24px;
    `}
`;

const Title = styled.h2`
	font-family: Mulish;
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	letter-spacing: 0.5px;
	color: #000000;
	margin-bottom: 24px;
	
	${media.mobile`
    	font-size:18px;
    `}
`;

const DescriptionText = styled.p`
	font-family: Mulish;
	font-weight: 500;
	font-size: 16px;
	line-height: 32px;
	letter-spacing: 0.5px;
	color: #4f4f4f;
	margin-bottom: 40px;

	${media.mobile`
		font-size:14px;
	    line-height: 28px;
    `}
`;

const Img = styled.img`
	width: 100%;
	margin-bottom: 25px;
`;

const MainDescription = () => (
	<Container>
		<Title>THE CHALLENGE</Title>
		<DescriptionText>
			In recent years, global attention to marine litter and plastic
			pollution has surged. Estimates show that rivers transport
			upwards of millions of tons of plastic into the oceans every
			year. Some 95% of that discharge comes from only 10 rivers, 8 of
			which are in Asia. Amongst those 8 are the Mekong and the Ganges
			rivers, the lifeblood for hundreds of millions of people in
			South-East Asia and India. However, scientific knowledge on
			marine plastic litter and effective countermeasures remains
			insufficient to tackle the problem properly.
		</DescriptionText>
		<Img src={imgDesc} />

		<Title>THE PROJECT</Title>
		<DescriptionText>
			The CounterMEASURE project works to identify sources and
			pathways of plastic pollution in river systems in Asia,
			particularly the Mekong and the Ganges. The project has
			developed plastic leakage models for localities in 6 different
			countries using an innovative and replicable approach. Deploying
			technologies like GIS, machine learning and drones has allowed
			the CounterMEASURE team to augment ground-level research in an
			efficient and scalable way. This scientific knowledge can then
			be used to inform policy decisions and actions to beat plastic
			pollution and ensure rivers are free of plastic waste.
		</DescriptionText>

		<Title>THE TEAM</Title>
		<DescriptionText>
			CounterMEASURE is managed by the UN Environment Programme’s
			Regional Office for Asia and the Pacific. We work closely with
			local and international partners, including governments,
			universities, NGOs and companies to conduct our research and
			develop our recommendations. CounterMEASURE is funded through
			the generous support of the Government of Japan.
		</DescriptionText>
		<div />
		<Img src={UN} />
	</Container>
);

export default MainDescription;
