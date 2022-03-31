import styled from 'styled-components'
import media from '../../helpers/media'

export const Container = styled.div`
	padding: 20px;
`

export const Content = styled.div`
	max-width: 1100px;
	margin: 0 auto;
`

export const ResultContainer = styled.div`
	max-width: 1200px;
	padding-top: 20px;
`

export const ResultList = styled.div`
	max-width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
`

export const KnowledgePanelContainer = styled.div`
	padding: 80px 20px;
	flex: 1;
	max-width: 20%;
	margin-left: 100px;
`

export const KeyWordsSection = styled.div`
	background: #e8f3ff;
	border-radius: 12px;
	padding: 16px 20px;
	width: 1100px;
	display: flex;
	margin: 0 auto;
	@media (max-width: 550px) {
		margin: 0;
	}
	${media.mobile`
	padding: 10px 20px;
	`}
`

export const SearchResultContainer = styled.div`
	padding: 16px 20px;
	width: 60%;
	flex: 1;
	${media.tablet`
	width:80%;
	`}
	${media.mobile`
	width:100%;
	padding: 16px 10px;
	`}
`

export const SpinContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`

export const KeyWordContainer = styled.div`
	padding: 8px 16px;
	width: fit-content;
	cursor: pointer;
	background: #ffffff;
	border: 1px solid #e2e2e2;
	border-radius: 24px;
	margin-right: 16px;
	${media.mobile`
	padding: 5px 14px;
	`}
`

export const KeyWord = styled.span`
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.2px;
	color: #656770;
	${media.mobile`
	font-size:12px;

	`}
`

export const PaginationContainer = styled.div`
	text-align: center;
	font-style: italic;
	margin: 0 0 5px;
	background-color: #fff;
	padding: 30px 0px;
`

export const ChartContainer = styled.div`
	padding: 24px 10px;
	width: 636px;
`

export const Chart = styled.div`
	width: 90%;
`
