import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import FooterComponent from '../components/FooterComponent'

const LoginPage = () => {
    return (
        <>
            <div id="login"  className="mt-5">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h4>Masuk</h4>
                            <p>Masuk untuk melanjutkan pembelian.</p>

                            <Form>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placehoder="Masukkan Email"  />
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placehoder="Masukkan Password" />

                                <Link to="#" className="d-flex justify-content-end mt-3">Lupa Password</Link>

                                <Button className="btn btn-primary w-100 mt-5">Masuk</Button>
                            </Form>

                            <p className="mt-5">Sudah punya akun? <Link to="/daftar">Daftar</Link></p>
                        </Col> 

                        <Col lg={6}>
                            <img src="../src/assets/image 4.png" alt="" width="100%" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <FooterComponent/>
        </>
    );
}

export default LoginPage;