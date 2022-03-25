import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination, Empty, Spin, notification } from 'antd';
import Topbar from './topbar';
import ResultItem from './ResultItem';
import Footer from './../../components/footer';
import KnowledgePanel from './KnowledgePanel';
import PARAM_NAME from './../../constants/searchParams';
import { OTHERS, DATA_SET } from '../../constants/documentTypes';

import { searchDataset, PAGE_SIZE, searchPlatform } from '../../api';
import { Container, Content, ResultContainer, ResultList, KnowledgePanelContainer, KeyWordsSection, SearchResultContainer,
	SpinContainer, KeyWordContainer, KeyWord, PaginationContainer, ChartContainer, Chart } from './styles';

const defaultKeywordList = ['Waste management', 'Microplastic', 'Single use plastic', 'Plastic', 'Plastic pollution', 'Plastic leakage', 'Clean rivers'];
const defaultPaginationState = {
	current: 1,
	size: PAGE_SIZE,
	total_pages: 1,
};

const SearchResult = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchResults, setSearchResults] = useState(null);
	const [keyWords, setKeyWords] = useState([]);
	const [knowledgePanelData, setKnowledgePanelData] = useState(null);
	const [documentTypeList, setDocumentTypeList] = useState([]);
	const [locationList, setLocationList] = useState([]);
	const [pagination, setPagination] = useState(defaultPaginationState);


	useEffect(() => {
		applySearch();
	}, [searchParams]);

	async function applySearch() {
		setSearchResults(null);

		try {
			const docType = searchParams.get(PARAM_NAME.DOCUMENT_TYPE);

			if (docType === DATA_SET) {
				return handleDatasetSearch();
			}

			const response = await searchPlatform({
				searchText: getSearchQueryString(),
				page: searchParams.get(PARAM_NAME.PAGE_INDEX),
				documentType: docType,
				theme: searchParams.get(PARAM_NAME.THEMATIC_AREA),
				location: searchParams.get(PARAM_NAME.LOCATION),
			});
			const { meta, results, knowledge, facets } = response;

			setDocumentTypeList(facets.document_type.map(({ value }) => {
				if (value) {
					return value;
				}

				return OTHERS;
			}));

			setLocationList(facets.countries.map(({ value }) => value));
			setPagination(meta.page);
			setSearchResults(results);
			setKnowledgePanelData(null);

			// Clean up chart script
			const chartParentNode = document.getElementById('chart-container');
			chartParentNode.innerHTML = '';


			if (knowledge?.tags?.length) {
				setKeyWords(knowledge.tags.map((tag) => capitalizeString(tag)));
			} else {
				setKeyWords(defaultKeywordList);
			}

			setKnowledgePanelData(knowledge?.entities);

			if (knowledge?.visualizations?.length) {
				knowledge.visualizations.forEach((vizualizationScript) => {
					const script = document.createElement('script');
					const divWithId = document.createElement('div');
					divWithId.setAttribute('id', vizualizationScript.divId);
					divWithId.style = "margin-bottom: 60px"
					chartParentNode.appendChild(divWithId);

					script.onload = function () {
						//do stuff with the script
					};
					script.src = vizualizationScript.src;

					document.head.appendChild(script);
				});
			}
		} catch (error) {
			console.log('error is =========> ', error);
			notification.error({
				placement: 'bottomLeft',
				message: 'Error occurred',
				description: 'Error occured during search of data, our team is already working to resolve it, please try later. ',
			});
		}
	}

	async function handleDatasetSearch() {
		setPagination(defaultPaginationState);
		const response = await searchDataset({ searchText: 'plastic' });
		const { result } = response;

		if (!keyWords?.length) {
			setKeyWords(defaultKeywordList);
		}
		
		const resultList = result.results.map((item) => ({
			title: item.title,
			summary: item.notes,
			url: item.url,
		}));
		setSearchResults(resultList);
	}

	function capitalizeString(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function getSearchQueryString() {
		return searchParams.get(PARAM_NAME.SEARCH_TEXT);
	}

	function handleKeywordSelect(keyword) {
		setSearchParams({ 
			[PARAM_NAME.SEARCH_TEXT]: keyword,
			[PARAM_NAME.PAGE_INDEX]: 1,
			[PARAM_NAME.DOCUMENT_TYPE]: searchParams.get(PARAM_NAME.DOCUMENT_TYPE),
			[PARAM_NAME.THEMATIC_AREA]: searchParams.get(PARAM_NAME.THEMATIC_AREA),
			[PARAM_NAME.LOCATION]: searchParams.get(PARAM_NAME.LOCATION),
		});
	}

	function handlePagingIndexChange(pageIndex) {
		setSearchParams({
			[PARAM_NAME.SEARCH_TEXT]: getSearchQueryString(),
			[PARAM_NAME.PAGE_INDEX]: pageIndex,
			[PARAM_NAME.DOCUMENT_TYPE]: searchParams.get(PARAM_NAME.DOCUMENT_TYPE),
			[PARAM_NAME.THEMATIC_AREA]: searchParams.get(PARAM_NAME.THEMATIC_AREA),
			[PARAM_NAME.LOCATION]: searchParams.get(PARAM_NAME.LOCATION),
		});
	}

	function renderSimillarKeywords() {
		const list = keyWords.filter((item) => item !== getSearchQueryString()).map((keyword) => (
			<KeyWordContainer key={keyword} onClick={() => handleKeywordSelect(keyword)}>
				<KeyWord>{keyword}</KeyWord>
			</KeyWordContainer>
		));

		return (
			<KeyWordsSection>
				{list}
			</KeyWordsSection>
		);
	}

	function renderKnowledgePanel() {
		if (!knowledgePanelData) {
			return null;
		}

		return knowledgePanelData.map((entity, index) => (
			<KnowledgePanel
				key={index}
				name={entity.name}
				properties={entity.properties}
			/>
		));
	}

	function renderSearchResultList() {
		if (!searchResults) {
			return (
				<SpinContainer>
					<Spin />
				</SpinContainer>
			);
		}

		if (!searchResults.length) {
			const chartParentNode = document.getElementById('chart-container');

			chartParentNode.innerHTML = '';

			return (
				<SearchResultContainer>
					<Empty description="No data found based on your search and filters" />
				</SearchResultContainer>
			);
		}

		const resultList = searchResults.map((item, index) => (
			<ResultItem
				title={item.title}
				description={item.summary}
				url={item.url}
				withoutBorder={index === 0}
				key={index}
			/>
		));

		return (
			<SearchResultContainer>
				{resultList}
			</SearchResultContainer>
		);
	}

	return (
		<Container>
			<Topbar
				documentTypeList={documentTypeList}
				locationList={locationList}
			/>
			<Content>
				{renderSimillarKeywords()}
				<ResultContainer>
					<ResultList>
						<ChartContainer id="chart-container">
						</ChartContainer>
						{renderSearchResultList()}
					</ResultList>
					<KnowledgePanelContainer>
						{renderKnowledgePanel()}
					</KnowledgePanelContainer>
				</ResultContainer>
				<PaginationContainer>
					<Pagination
						showSizeChanger={false}
						current={pagination.current}
						onChange={handlePagingIndexChange}
						pageSize={PAGE_SIZE}
						total={pagination.total_results}
						hideOnSinglePage
					/>
				</PaginationContainer>
			</Content>
			<Footer />
		</Container>
	);
};

export default SearchResult;
