import React, { useState } from 'react';
import * as sysUrl from '../resources/js/url'
import './Ticker.css'
import { useFetch } from '../hooks/useFetch'

export default function Ticker() {

    //await getDataAsync()
    const [url, setUrl] = useState(sysUrl.trendURL)
    const { data } =  useFetch(url, sysUrl.headers)


    return (

        <>
            <div className="overflow-hidden" id="displayDiv">
                <div className="flex ticker-display" id="sliderDisplay">
                    {data && data.map(item =>
                        <div className="ticker-item" key={ item.symbol }>
                            <div className="ticker-title mx-2" id="ticker-title">${item.symbol.toUpperCase()}</div>
                            <div id="inner-display">
                                <div className="ticker-price mx-2">$${item.regularMarketPrice.toFixed(2)}</div>
                                <div className="ticker-change mx-2" style={{ color: item.regularMarketChangePercent.toFixed(1) < 0 ? 'red' : 'green' }} id="changePercentage">${item.regularMarketChangePercent.toFixed(1)}<span>%</span></div>
                            </div>
                        </div>

                    )
                    }
                </div>
            </div>

            <div className="ticker-checkout">
                <a href="https://finance.yahoo.com/trending-tickers">
                    <div className="checkout-title">CHECKOUT TRENDING TICKERS</div>
                </a>
            </div>

        </>

    );



}




