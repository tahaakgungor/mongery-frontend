import { Badge, Card, Dropdown, Table } from 'react-bootstrap';

// type
import { ProjectDetail } from './types';

type ProjectsProps = {
    projectDetails: ProjectDetail[];
};

const Projects = ({ projectDetails }: ProjectsProps) => {
    return (
        <Card>
            <Card.Body>
             
            

                <h4 className="header-title mt-0 mb-3">Son Siparişler</h4>

                <Table responsive hover className="mb-0">
                    <thead>
                        <tr>
                            <th>Sipariş Numarası</th>
                            <th>Müşteri</th>
                            <th>Sipariş Oluşturulma Tarihi</th>
                            <th>Tahmini Teslim</th>
                            <th>Ürün Durumu</th>
                            <th>Sipariş Oluşturan Kişi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(projectDetails || []).map((projectDetail, index) => {
                            return (
                                <tr key={index.toString()}>
                                    <td>{projectDetail.id}</td>
                                    <td>{projectDetail.name}</td>
                                    <td>{projectDetail.startDate}</td>
                                    <td>{projectDetail.dueDate}</td>
                                    <td>
                                        <Badge bg={projectDetail.variant}>{projectDetail.status}</Badge>
                                    </td>
                                    <td>{projectDetail.clients}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Projects;
