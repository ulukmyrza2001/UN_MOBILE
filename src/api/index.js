import { OTHERS } from "../constants/documentTypes";

const SERVER_URL = 'https://cm2-springcloud-test-search-platform-backend.azuremicroservices.io';
export const DATA_CATALOG_URL = 'http://data-plasticfreerivers.westeurope.cloudapp.azure.com';

export const PAGE_SIZE = 12;

export const searchDataset = async ({ searchText }) => {
	const response = await fetch(`${DATA_CATALOG_URL}/api/3/action/package_search?q=${searchText}&rows=100`);

	return response.json();
};

export const searchPlatform = async ({ searchText, page, documentType, theme, location }) => {
	let response = null;

	if (documentType) {
		if (documentType === OTHERS) {
			response = await fetch(`${SERVER_URL}/search?query=${searchText}&page=${page}&size=${PAGE_SIZE}&filter_by=document_type&filter_value=""`);
		} else {
			response = await fetch(`${SERVER_URL}/search?query=${searchText}&page=${page}&size=${PAGE_SIZE}&filter_by=document_type&filter_value=${documentType}`);
		}
	} else if (theme) {
		response = await fetch(`${SERVER_URL}/search?query=${searchText}&page=${page}&size=${PAGE_SIZE}&filter_by=themes&filter_value=${theme}`);
	} else if (location) {
		response = await fetch(`${SERVER_URL}/search?query=${searchText}&page=${page}&size=${PAGE_SIZE}&filter_by=countries&filter_value=${location}`);
	} else {
		response = await fetch(`${SERVER_URL}/search?query=${searchText}&page=${page}&size=${PAGE_SIZE}`);
	}

	return response.json();
};
