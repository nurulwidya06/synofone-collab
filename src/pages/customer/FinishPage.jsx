import NavComponent from "../../components/customer/NavComponent"
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

const FinishPage = () => {
    return (
        <>
            <NavComponent />
            <div id="finish">
                <Container>
                    <Row className="text-center mt-5">
                        <Col>
                            <h1>Selamat! Pesanan berhasil dibuat</h1>
                            <img src="../src/assets/img-sukses.png" alt="" width="50%" />
                            <p>Admin kami akan menghubungi anda secara berkala untuk pesanan dan nomor resi pengiriman melalui Whatsapp.</p>
                            <Link to="/" className="btn btn-primary">Kembali ke beranda</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default FinishPage