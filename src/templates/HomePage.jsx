import { useEffect, useState } from "react"
import TableCoin from "../modules/TableCoin.jsx"

function HomePage() {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&x_cg_demo_api_key=CG-n65sJxwZpiswaJq5FA53T9hL")
            .then(res => res.json())
            .then(json => setCoins(json))
    }, [])

    return (
        <TableCoin coins={ coins } />
    )
}

export default HomePage