const BASE_URL = 'https://api.coingecko.com/api/v3';
const APIKey = 'CG-n65sJxwZpiswaJq5FA53T9hL';

const getCoinsList = (page, currency) =>
	`${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${APIKey}`;
const searchCoin = (query) => `${BASE_URL}/search?query=${query}`;

const marketChart = (coin) =>
	`${BASE_URL}/coins/${coin}/market_chart/?vs_currency=usd&days=7`;

export { getCoinsList, searchCoin, marketChart };
