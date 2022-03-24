import styled from 'styled-components';
import media from '../../helpers/media';


export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	min-height: 100%;
`;

export const Content = styled.div`
	min-height: 100%;
	padding: 32px 160px;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;

export const ResultContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ResultList = styled.div`
	width: 50%;

	${media.mobile`
		width: 100%;
	`}

	${media.tablet`
		width: 90%;
	`}

	${media.desktop`
		width: 80%;
	`}
`;

export const KnowledgePanelContainer = styled.div`
	padding: 80px 20px;
	flex: 1;
	max-width: 20%;
	margin-left: 100px;
`;

export const KeyWordsSection = styled.div`
	background: #E8F3FF;
	border-radius: 12px;
	padding: 16px 20px;
	width: 100%;
	display: flex;
`;

export const SearchResultContainer = styled.div`
	padding: 16px 20px;
	width: 100%;
	flex: 1;
`;

export const SpinContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

export const KeyWordContainer = styled.div`
	padding: 8px 16px;
    width: fit-content;
	cursor: pointer;
	background: #FFFFFF;
	border: 1px solid #E2E2E2;
	border-radius: 24px;
	margin-right: 16px;
`;

export const KeyWord = styled.span`
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.2px;
	color: #656770;
`;

export const PaginationContainer = styled.div`
	text-align: center;
	font-style: italic;
	margin: 0 0 5px;
	background-color: #fff;
	padding: 30px 0px;
`;

export const ChartContainer = styled.div`
	padding: 24px 0px;
	width: 80%;

	${media.mobile`
		width: 100%;
	`}

	${media.tablet`
		width: 90%;
	`}

	${media.desktop`
		width: 80%;
	`}
`;

export const Chart = styled.div`
	width: 100%;
`;
