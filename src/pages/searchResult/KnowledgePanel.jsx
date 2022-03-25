import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	border: 1px solid #E2E2E2;
	border-radius: 4px;
	margin-bottom: 30px;
`;

const Title = styled.span`
	font-family: 'Mulish';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 28px;
	color: #000000;
	padding: 20px;
	display: block;
`;

const Description = styled.span`
	color: #4d5156;
	padding: 0px 20px 20px 20px;
	display: block;
	font-size: 14px;
	line-height: 22px;
`;

const Image = styled.img`
	width: 100%;
`;

const DataRow = styled.div`
	display: flex;
	flex-direction: row;
	padding: 5px 20px 15px 20px;
`;

const Key = styled.span`
	font-size: 14px;
	font-weight: 600;
	color: #202124;
	line-height: 22px;
`;

const Value = styled.span`
	font-size: 14px;;
	color: #3c4043;
	line-height: 22px;
`;

const KnowledgePanel = ({ name, properties }) => {
	const { url, description, ...restProperties } = properties;

	return (
		<Container>
			{url && <Image src={url} />}
			<Title>{name}</Title>
			{description && <Description>{description}</Description>}	
			{
				Object.entries(restProperties).map(([key, value]) => (
					<DataRow key={key}>
						<Key>{key}:</Key> &nbsp;<Value>{value}</Value>
					</DataRow>
				))
			}
		</Container>
	);
};

export default KnowledgePanel;