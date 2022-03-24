import {
	Routes,
	Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import Lading from './pages/landing';
import SearchResult from './pages/searchResult';
import About from './pages/about';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Partners from './pages/partners';
import { ROUTES } from './constants/routes';
import ScrollToTop from './components/ScrollToTop';
import { DATA_CATALOG_URL } from './api';


import React from 'react'

export const RedirectToDataCatalogComponent = () => {
	useEffect(() => {
		window.location.replace(DATA_CATALOG_URL);
	}, []);

	return null;
};


const App = () => {
	return (
		<ScrollToTop>
			<Routes>
				<Route path={ROUTES.HOME.path} element={<Lading />} />
				{/* {HOME_PAGE_LINKS.map(({ path }) => <Route key={path} path={path} element={<div />} />)} */}
				<Route path={ROUTES.SEARCH_RESULT.path} element={<SearchResult />} />
				<Route path={ROUTES.PRIVACY.path} element={<Privacy />} />
				<Route path={ROUTES.TERMS.path} element={<Terms />} />
				<Route path={ROUTES.ABOUT.path} element={<About />} />
				<Route path={ROUTES.PARTNERS.path} element={<Partners />} />
				<Route path={ROUTES.DATA_CATALOG.path} element={<RedirectToDataCatalogComponent />} />
			</Routes>
		</ScrollToTop>
	);
};

export default App;
