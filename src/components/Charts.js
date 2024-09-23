import {useFetch} from '../hooks/useFetch'
import * as sysUrl from '../resources/js/url'
import {Line } from 'react-chartjs-2'
import {useState } from 'react'
export default function Charts(ticker ='SP-500') {


    //const { data } = useFetch(sysUrl.urlCharts, sysUrl.headers)
    const [ChartData, setChartData] = useState([]);
    const [ChartOptions, setChartOptions] = useState({})


    const fetchData = async () => {
        const res = await fetch(sysUrl.urlCharts, sysUrl.headers);
        const json = await res.json();
        setChartData(json.chart.result[0])
        console.log(json)
    }

    //fetchData()

       

        let timestampArr = [];
        let close = [];
        let xAxys;

    if (ChartData !== undefined) {
        ChartData.timestamp.forEach(time => {
            // console.log(time);
            xAxys = getDate(time);
            if (xAxys.slice(xAxys.length - 1) == '/') {
                xAxys = xAxys.slice(0, xAxys.length - 1);
            }
            // xAxys = xAxys.replace('/', '-');

            // console.log(xAxys);
            timestampArr.push(xAxys);
        })

        ChartData.indicators.quote[0].close.forEach(price => {
            close.push(Number(price.toFixed(2)));
        })
    }
        

    function getDate(time) {

        const dateObject = new Date(ChartData * 1000);

        const finalDate = dateObject.toLocaleString();

        const day = finalDate.slice(0, 1);

        const month = finalDate.slice(2, 4);

        return `${day}/${month}`;

    }


    setChartData({
        data: {
            labels: timestampArr,
            datasets: [{
                label: `Daily ${ticker} Chart`,
                data: close,
                backgroundColor: [
                    'rgba(255, 255, 255, 0)',
                ],
                borderColor: [
                    'rgb(255, 115, 0)',
                ],
                borderWidth: 3
            }]
        }
    })
    setChartOptions({options: {
                animation: {
                    easing: "easeInOutQuint"
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    bodyFontColor: 'white',
                    titleFontSize: 14,
                    bodyFontSize: 14,
                    displayColors: false,
                    titleAlign: 'center',
                    bodySpacing: 10,
                    titleSpacing: 8

                },
                hover: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        fontSize: 25,
                        boxWidth: 0
                    }
                },
                elements: {
                    point: {
                        radius: 0
                    }
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false
                        },
                        scaleLabel: {
                            display: true
                        }
                    }],
                    yAxes: [{
                        display: true,
                        position: 'right',
                        gridLines: {
                            display: false
                        },
                        scaleLabel: {
                            display: true
                        }
                    }]
                },
                responsive: true,
            }
        });

    return (
        <div>
            <Line data={ChartData} options={ChartOptions } />
        </div>
        )

    }



    

