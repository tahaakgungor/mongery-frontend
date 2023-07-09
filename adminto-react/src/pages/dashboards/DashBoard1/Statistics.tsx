import { Col, Row } from 'react-bootstrap';

// component
import StatisticsWidget1 from '../../../components/StatisticsWidget1';
import StatisticsWidget2 from '../../../components/StatisticsWidget2';

const Statistics = () => {
    return (
        <Row>
            <Col xl={3} md={6}>
                <StatisticsWidget1
                    title="Sipariş Miktarı"
                    data={79}
                    stats={165}
                    color={'#f05050'}
                    subTitle="Bugünkü Satış"
                />
            </Col>
            <Col xl={3} md={6}>
                <StatisticsWidget2
                    variant="success"
                    title="Haftalık"
                    trendValue="32%"
                    trendIcon="mdi mdi-trending-up"
                    stats={1283}
                    subTitle="Haftalık Satış"
                    progress={77}
                />
            </Col>
            <Col xl={3} md={6}>
                <StatisticsWidget2
                    variant="success"
                    title="Aylık Satış"
                    trendValue="12%"
                    trendIcon="mdi mdi-trending-up"
                    stats={5721}
                    subTitle="Revenue today"
                    progress={77}
                />
            </Col>
            <Col xl={3} md={6}>
                <StatisticsWidget1
                    title="Toplam Satış"
                    color={'#ffbd4a'}
                    data={80}
                    stats={23214}
                    subTitle="Bugüne Kadarki Sipariş Miktarı"
                />
            </Col>
         
        </Row>
    );
};

export default Statistics;
