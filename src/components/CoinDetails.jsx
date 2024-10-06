import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CoinDetails() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-ZyfDkT6rNvTXgSjEwmiDAyfp' }
  };

  useEffect(() => {
    async function fetchCoinData() {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options);
        const data = await res.json();
        setCoin(data);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    }
    fetchCoinData();
  }, [id]);

  if (!coin) return <div className="text-center p-4">Loading...</div>;

  const {
    name,
    symbol,
    categories,
    description,
    image,
    market_data,
    links,
  } = coin;
  console.log(coin);
  
  return (
   
    <div className="bg-gray-900 min-h-screen w-screen flex items-center justify-center p-4 md:p-8">
  <div className="max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
    <div className="grid md:grid-cols-2 gap-8">

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <img src={image.large} alt={name} className="w-20 h-20 rounded-full" />
          <div>
            <h1 className="text-4xl font-bold text-white">{name}</h1>
            <p className="text-lg text-gray-400">{symbol.toUpperCase()}</p>
          </div>
        </div>
        <p className="text-gray-300">{description.en.split('. ')[0]}.</p>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Categories:</h2>
          <div className="flex flex-wrap gap-2">
            {categories?.map((category, index) => (
              <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-200">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Market Data:</h2>
          <p className="text-gray-300">Current Price: <span className="text-green-400">${market_data.current_price.usd.toLocaleString()}</span></p>
          <p className="text-gray-300">Market Cap: <span className="text-blue-400">${market_data.market_cap.usd.toLocaleString()}</span></p>
          <p className={`text-gray-300 ${market_data.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
            24h Change: {market_data.price_change_percentage_24h.toFixed(5)}%
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Links:</h2>
          <a href={links.homepage[0]} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 hover:underline transition">
            Official Website
          </a>
        </div>
      </div>
    </div>

    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-white mb-2">Whitepaper:</h2>
      <a href={links.whitepaper} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 hover:underline transition">
        View Whitepaper
      </a>
    </div>
  </div>
</div>

  );
}