import React from 'react';
import { AdminNavBar } from '../../components/pages/AdminNavBar';
import '../../components/pages/AdminDashBoard.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import adminimg from '../images/admin.png';
import sysadmin from '../images/sysadmin.png';



// Sample admin data array
const adminData = [
  {
    id: 1,
    name: 'Admin 1',
    role: 'User Manager',
    image: adminimg,
  },
  {
    id: 2,
    name: 'Admin 2',
    role: 'Product Manager',
    image: adminimg,
  },
  {
    id: 3,
    name: 'Admin 3',
    role: 'Order Manager',
    image: adminimg,
  },
  {
    id: 4,
    name: 'Admin 4',
    role: 'Delivery Manager',
    image: adminimg,
  },
  {
    id: 5,
    name: 'Admin 5',
    role: 'Employee Manager',
    image: adminimg,
  },
  {
    id: 6,
    name: 'Admin 6',
    role: 'Inventory Manager',
    image: adminimg,
  },
  {
    id: 7,
    name: 'Admin 7',
    role: 'Customer Affairs Manager',
    image: adminimg,
  },
  {
    id: 8,
    name: 'Admin 8',
    role: 'Supplier Manager',
    image: adminimg,
  },
  {
    id: 2,
    name: 'Admin 9',
    role: 'System Admin ',
    image: sysadmin,
  },
  
];

export const AdminDashBoard = () => {
  return (
    <div>
      <AdminNavBar />
      <div className="container">
        <div className="name"><h1>Admin Dashboard</h1></div>
        <div className="adminlist">
          <Row xs={1} md={3} className="g-4">
            {adminData.map((admin) => (
              <Col key={admin.id}>
                <Card className='card'>
                  <Card.Img variant="top" src={admin.image}  style={{width:'285px', height:'160px', paddingLeft:'100px', paddingTop:'10px'}} />
                  
                  <Card.Body>
                    <Card.Title className='cardTitle'>{admin.role}</Card.Title>
                    
                    <Button className='logbtn' variant="primary">Log In</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};
