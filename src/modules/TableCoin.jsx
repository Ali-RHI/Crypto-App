import { RotatingLines } from 'react-loader-spinner';

import styles from './TableCoin.module.css';

import chartUp from '../assets/chart-up.svg';
import chartDown from '../assets/chart-down.svg';

function TableCoin({ coins, isLoading, currency }) {
	return (
		<div className={styles.container}>
			{isLoading ? (
				<RotatingLines
					visible={true}
					height="96"
					width="96"
					strokeColor="#3874ff"
					color="#3874ff"
					strokeWidth="2"
					animationDuration="0.75"
					ariaLabel="rotating-lines-loading"
					wrapperStyle={{}}
					wrapperClass=""
				/>
			) : (
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Coin</th>
							<th>Name</th>
							<th>Price</th>
							<th>24h</th>
							<th>Total Volume</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{coins.map((coin) => (
							<TableRow
								currency={currency}
								coin={coin}
								key={coin.id}
							/>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default TableCoin;

const TableRow = ({
	currency,
	coin: {
		image,
		name,
		symbol,
		total_volume,
		current_price,
		price_change_percentage_24h: priceChange,
	},
}) => {
	return (
		<tr>
			<td>
				<div className={styles.symbol}>
					<img
						src={image}
						alt=""
					/>
					<span>{symbol.toUpperCase()}</span>
				</div>
			</td>
			<td>{name}</td>
			<td>
				{currency === 'usd' ? (
					<span>$</span>
				) : currency === 'eur' ? (
					<span>€</span>
				) : (
					<span>¥</span>
				)}
				{current_price.toLocaleString()}
			</td>
			<td className={priceChange > 0 ? styles.success : styles.error}>
				{priceChange.toFixed(2)}
			</td>
			<td>{total_volume.toLocaleString()}</td>
			<td>
				<img
					src={priceChange > 0 ? chartUp : chartDown}
					alt={name}
				/>
			</td>
		</tr>
	);
};
