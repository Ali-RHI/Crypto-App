import { useEffect, useState } from 'react';

import TableCoin from '../modules/TableCoin.jsx';
import { getCoinsList } from '../services/cryptoAPI.js';
import Pagination from '../modules/Pagination.jsx';

function HomePage() {
	const [coins, setCoins] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);

	useEffect(() => {
        setIsLoading(true);
		const getData = async () => {
			const res = await fetch(getCoinsList(page));
			const json = await res.json();
			setCoins(json);
			setIsLoading(false);
		};

		getData();
	}, [page]);

	return (
		<>
			<Pagination
				page={page}
				setPage={setPage}
			/>
			<TableCoin
				coins={coins}
				isLoading={isLoading}
			/>
		</>
	);
}

export default HomePage;
