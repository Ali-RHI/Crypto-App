import { useEffect, useState } from 'react';

import TableCoin from '../modules/TableCoin.jsx';
import { getCoinsList } from '../services/cryptoAPI.js';

function HomePage() {
	const [coins, setCoins] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(getCoinsList());
			const json = await res.json();
			setCoins(json);
            setIsLoading(false)
		};

		getData();
	}, []);

	return <TableCoin coins={coins} isLoading={isLoading} />;
}

export default HomePage;
