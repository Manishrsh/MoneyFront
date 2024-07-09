import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './homestyle.css';
import { useDispatch } from 'react-redux';
import { setEcpencedate } from '../Store/ExpencefileSclice';



const Home = () => {
    const dispatch = useDispatch();

  const [expencedata, setexpencedata] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('https://moneybackend-figh.onrender.com/expencedata');
        console.log(response.data)
        setexpencedata(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchdata();
  }, []);

  const addDateexpence = (date) =>{
    dispatch(setEcpencedate(date))

    navigate('/expencealldatefor')
  }  

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Previous Date Balance</th>
                  <th>Total Expences</th>
                  <th>Total Add Money</th>
                  <th>New Balance</th>
                  
                </tr>
              </thead>
              <tbody>
                {expencedata.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.date}</td>
                    <td>{item.previousBalance}</td>
                    <td onClick={() => addDateexpence(item.date)}>{item.totalExpence}</td>
                    <td>{item.totalAddMoney}</td>
                    <td>{item.newBalance}</td>
                   
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
