import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Table } from 'react-bootstrap';

const ExpenceDatefor = () => {
    const roomId = useSelector((state) => state.roomId.roomId);
    console.log(roomId);

    const [expencedata, setexpencedata] = useState([]);

    useEffect(() => {
        console.log(roomId);
        const dataexpencedataformat = async (date) => {
            console.log(date);
            try {
                const response = await axios.get('https://api.manishmoneymanage.tech/expencedatadateformat', {
                    params: {
                        date: date
                    }
                });
                console.log(response);
                setexpencedata(response.data);
                console.log(expencedata);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        if (roomId) {
            dataexpencedataformat(roomId);
        }
    }, [roomId]);

    return (
        <Container>
            <Row>
                <Col>
                    <Table striped bordered hover>
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
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.though}</td>
                                    <td>{item.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default ExpenceDatefor;
