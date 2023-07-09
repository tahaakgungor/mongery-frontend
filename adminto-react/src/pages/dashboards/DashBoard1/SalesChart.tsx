import { Card, Dropdown } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const SalesChart = () => {
    const apexOpts: ApexOptions = {
        chart: {
            type: 'donut',
        },
        plotOptions: {
            pie: {
                expandOnClick: true,
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            formatter: (val: string) => {
                                return val;
                            },
                            offsetY: 4,
                            color: '#98a6ad',
                        },
                        value: {
                            show: true,
                            formatter: (val: string) => {
                                return val;
                            },
                            color: '#98a6ad',
                        },
                    },
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#6658dd', '#ff8acc', '#35b8e0'],
        legend: {
            show: true,
            position: 'bottom',
            height: 40,
            labels: {
                useSeriesColors: true,
            },
        },
        labels: ['Jiletli Tel', 'Çivili Tel', 'Tel'],
        tooltip: {
            enabled: false,
        },
    };

    const apexData = [1956, 1598, 3581];

    return (
        <Card>
            <Card.Body>
               

                <h4 className="header-title mt-0">Satılan Ürün Ton Miktarı</h4>

                <div dir="ltr">
                    <Chart
                        options={apexOpts}
                        series={apexData}
                        type="donut"
                        height={302}
                        className="apex-charts mt-2"
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default SalesChart;
