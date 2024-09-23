import { useFetch } from '../hooks/useFetch'
import * as sysUrl from '../resources/js/url'

import './TrendingTable.css'



export default function TrendingTable() {


    const { data } = useFetch(sysUrl.trendURL, sysUrl.headers)

    return (        
        <div className="col-lg-12 bg-light table-responsive" id = "table" >
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Ticker</th>
                    <th scope="col">Asset</th>
                    <th scope="col">Previous Close - $</th>
                    <th scope="col">Day Close - $</th>
                    <th scope="col">Variation- $</th>
                    <th scope="col">Change-%</th>
                </tr>
            </thead>
                <tbody id="tableBody" className="overflow-auto">
                    {data && data.map(item => 



                        <tr key={ item.id }>
                            <th scope="row">{item.symbol}</th>
                            <td>{item.shortName}</td>
                            <td>{item.regularMarketPreviousClose.toFixed(2)}</td>
                            <td>{item.regularMarketPrice.toFixed(2)}</td>
                            <td style={{ color: item.regularMarketChangePercent.toFixed(2) < 0 ? 'red' : 'green' } }>{item.regularMarketChange.toFixed(2)}</td>
                        <td id={'percentage' + item.id} style={{color: item.regularMarketChangePercent.toFixed(2) < 0 ? 'red' : 'green' } } >{item.regularMarketChangePercent.toFixed(2)}</td>
                        </tr>
                    )}
            </tbody>
        </table>
        </div >
    )






}
