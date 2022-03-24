export const ROUTES = {
	HOME: {
		path: '/',
		label: 'Home',
	},
	SEARCH_RESULT: {
		path: 'search',
		label: 'Search results'
	},
	ABOUT: {
		path: '/about',
		label: 'About',
	},
	THEMATIC_PAGES: {
		path: '/thematics',
		label: 'Thematic pages',
	},
	PARTNERS: {
		path: '/partners',
		label: 'Partners',
	},
	HOW_TO_USE: {
		path: '/how-to-use',
		label: 'How to use',
	},
	DATA_CATALOG: {
		path: '/data-catalog',
		label: 'Data catalog',
	},
	CONTACTS: {
		path: '/contacts',
		label: 'Contacts',
	},
	PRIVACY: {
		path: '/terms-conditions',
		label: 'Terms & Conditions',
	},
	TERMS: {
		path: '/privacy-policy',
		label: 'Privacy Policy',
	},
};

export const FOOTER_LINKS = [
	ROUTES.HOME,
	ROUTES.TERMS,
	ROUTES.DATA_CATALOG,
	ROUTES.PARTNERS,
	ROUTES.PRIVACY,
];

export const HOME_PAGE_LINKS = [
	ROUTES.HOME,
	ROUTES.ABOUT,
	ROUTES.PARTNERS,
	ROUTES.DATA_CATALOG
];

