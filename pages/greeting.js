import { Container, Row, Col, Alert } from "reactstrap";
import { useRouter } from 'next/router';
import { useEffect, useContext, useState } from "react";
import AppContext from "../components/context";


function greeting() {
    let router = useRouter();  


    useEffect (() => {        
        setTimeout (() => router.replace("/"), 3000);             
    });

    return (
        <Container>
            <Row>
                <Col>
                <Alert type="success">{`Welcome back! Ready to eat?`}</Alert>
                </Col>
            </Row>
        </Container>
    );
}
export default greeting;