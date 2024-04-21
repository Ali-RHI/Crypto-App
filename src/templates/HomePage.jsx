import { useEffect, useState } from 'react';

import TableCoin from '../modules/TableCoin.jsx';
import { getCoinsList } from '../services/cryptoAPI.js';
import Pagination from '../modules/Pagination.jsx';
import Search from '../modules/Search.jsx';
import Chart from '../modules/Chart.jsx';

function HomePage() {
	const [coins, setCoins] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [currency, setCurrency] = useState('usd');
	const [chart, setChart] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		const getData = async () => {
			try {
				const res = await fetch(getCoinsList(page, currency));
				const json = await res.json();
				setCoins(json);
				setIsLoading(false);
			} catch (error) {
				console.log(error.message);
			}
		};

		getData();
	}, [page, currency]);

	return (
		<>
			<Search
				currency={currency}
				setCurrency={setCurrency}
			/>
			<TableCoin
				currency={currency}
				coins={coins}
				isLoading={isLoading}
				setChart={setChart}
			/>
			<Pagination
				page={page}
				setPage={setPage}
			/>
			{chart && (
				<Chart
					chart={chart}
					setChart={setChart}
				/>
			)}
		</>
	);
}

export default HomePage;
