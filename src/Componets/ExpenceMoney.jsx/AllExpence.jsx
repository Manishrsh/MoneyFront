import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './allexpence.css'; // Ensure this CSS file includes the new styles

const AllExpence = () => {
  const [expencedata, setexpencedata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('https://manishmoneymanage.tech/expencedataall');
        console.log(response);
        setexpencedata(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchdata();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="scrollable-table-container">
              <Table striped bordered hover className="table-fixed">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Amount</th>
                    <th>Details</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {expencedata.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td >{item.amount}</td>
                      <td>{item.though}</td>
                      <td>{item.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllExpence;
