import { Container, Row, Col, Button, Form } from "react-bootstrap";

import FooterComponent from "../components/FooterComponent"

const DaftarPage = () => {
    return (
        <>
            <div id="daftar" className="mt-5">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h4>Daftar</h4>
                            <p>Buat akun untuk mulai belanja.</p>

                            <Form action="/cart">
                                <Row>
                                    <Col lg={6}>
                                        <Form.Label>Nama Lengkap</Form.Label>
                                        <Form.Control type="text" name="nama-lengkap" placeholder="Masukkan Nama" />
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Label>No Telpon</Form.Label>
                                        <Form.Control type="text" name="telepon" placeholder="Masukkan Nomor Telpon" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Masukkan Email" />
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Label>Buat Password</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Masukkan Password" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Alamat</Form.Label>
                                        <Form.Control as="textarea" name="alamat" placeholder="Masukkan Alamat" rows={5} />
                                    </Col>
                                </Row>

                                <Button type="submit" className="w-100 mt-5">Buat Akun</Button>
                            </Form>
                        </Col>

                        <Col lg={6}>
                            <img src="../src/assets/image 5.png" alt="" width="100%" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <FooterComponent/>
        </>
    );
}

export default DaftarPage