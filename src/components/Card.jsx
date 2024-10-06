// import { Link } from "react-router-dom"

import { Link } from "react-router-dom"


export default function Card({datasep}) {
    const {id,name,image,current_price,high_24h,price_change_24h} = datasep
  return (
    

<Link to={`/coin/${id}`}>

<div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#" className="flex justify-center">
        <img className="w-[200px] mt-5 h-[200px] bg-cover bg-center bg-no-repeat" src={image} alt="" />
    </a>
    <div className="p-5 text-center">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        
        <p className="mb-3 sm:mt-0  font-normal text-gray-700 dark:text-gray-400">Current Price : {current_price}</p>
        <p className="mb-3 sm:mt-0  font-normal text-gray-700 dark:text-gray-400">Highest Price  : {high_24h}</p>
        <p className="mb-3 sm:mt-0  font-normal text-gray-700 dark:text-gray-400">Price Changed Last 24h : {price_change_24h}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</Link>

  )
}
