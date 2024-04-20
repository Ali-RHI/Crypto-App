const BASE_URL = 'https://api.coingecko.com/api/v3';
const APIKey = 'CG-n65sJxwZpiswaJq5FA53T9hL';

const getCoinsList = (page) => {
	return `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${APIKey}`;
};

export { getCoinsList };
