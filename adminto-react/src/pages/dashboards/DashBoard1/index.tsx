import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';
import { useRedux } from '../../../hooks';
// component
import Statistics from './Statistics';
import SalesChart from './SalesChart';
import StatisticsChart from './StatisticsChart';
import RevenueChart from './RevenueChart';
import Inbox from './Inbox';
import Projects from './Projects';

// dummy data
import { messages, projectDetails } from './data';

const DashBoard1 = () => {
    // set pagetitle
    usePageTitle({
        title: 'Anasayfa',
        breadCrumbItems: [
            {
                path: '/dashboard',
                label: 'DashBoard',
                active: true,
            },
        ],
    });
    const { dispatch, appSelector } = useRedux();

    const getToken = appSelector((state) => state);

    console.log(getToken);

    return (
        <>
            <Statistics />

            <Row>
                <Col xl={4}>
                    <SalesChart />
                </Col>
                <Col xl={4}>
                    <StatisticsChart />
                </Col>
                <Col xl={4}>
                    <RevenueChart />
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Inbox messages={messages} />
                </Col>
                <Col xl={8}>
                    <Projects projectDetails={projectDetails} />
                </Col>
            </Row>
        </>
    );
};

export default DashBoard1;
