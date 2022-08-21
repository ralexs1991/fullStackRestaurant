import { Container, Row, Col, Alert } from "reactstrap";
import { useRouter } from 'next/router';
import { useEffect } from "react";


function successfulCheckout() {
    let router = useRouter();

    useEffect (() => {        
        setTimeout (() => router.replace("/"), 3000);             
    });

    return (
        <Container>
            <Row>
                <Col>
                <Alert type="success">{`Payment was successful, your order is on it's way!`}</Alert>
                </Col>
            </Row>
        </Container>
    );
}
export default successfulCheckout;