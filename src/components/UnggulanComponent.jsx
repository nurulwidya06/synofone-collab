import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const UnggulanComponent = () => {
    return (
        <>
            <Container>
                <Row className="mt-5 mb-3">
                    <Col>
                        <h5>Smartphone Unggulan</h5>
                    </Col>
                </Row>

                <Row>
                    <Col lg={3} className="d-none d-lg-block">
                        <Card>
                            <Card.Img variant="top" src="../src/assets/hp1.png" />
                            <Card.Body>
                                <Link to="/detail" className="card-text">Xiaomi Redmi Note 13</Link>
                                <h5>IDR 500.000</h5>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className="d-none d-lg-block">
                        <Card>
                            <Card.Img variant="top" src="../src/assets/hp2.png" />
                            <Card.Body>
                                <Link to="/detail" className="card-text">Xiaomi Redmi Note 13</Link>
                                <h5>IDR 500.000</h5>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className="d-none d-lg-block">
                        <Card>
                            <Card.Img variant="top" src="../src/assets/hp3.png" />
                            <Card.Body>
                                <Link to="/detail" className="card-text">Xiaomi Redmi Note 13</Link>
                                <h5>IDR 500.000</h5>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className="d-none d-lg-block">
                        <Card>
                            <Card.Img variant="top" src="../src/assets/hp4.png" />
                            <Card.Body>
                                <Link to="/detail" className="card-text">Xiaomi Redmi Note 13</Link>
                                <h5>IDR 500.000</h5>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="d-lg-none">
                    <Swiper
                        // install Swiper modules
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={50}
                    >
                        <SwiperSlide>
                            <Col lg={3}>
                                <Card>
                                    <Card.Img variant="top" src="../src/assets/hp1.png" />
                                    <Card.Body>
                                        <Link to="/detail" className="card-text">Xiaomi Redmi Note 13</Link>
                                        <h5>IDR 500.000</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Col lg={3}>
                                <Card>
                                    <Card.Img variant="top" src="../src/assets/hp2.png" />
                                    <Card.Body>
                                        <Link to="/detail" className="card-text">Xiaomi Redmi Note 13</Link>
                                        <h5>IDR 500.000</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Col lg={3}>
                                <Card>
                                    <Card.Img variant="top" src="../src/assets/hp3.png" />
                                    <Card.Body>
                                        <Link to="/detail" className="card-text">Xiaomi Redmi Note 13</Link>
                                        <h5>IDR 500.000</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Col lg={3}>
                                <Card>
                                    <Card.Img variant="top" src="../src/assets/hp4.png" />
                                    <Card.Body>
                                        <Link to="/detail" className="card-text">Xiaomi Redmi Note 13</Link>
                                        <h5>IDR 500.000</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </SwiperSlide>
                    </Swiper>
                </Row>


            </Container>
        </>
    );
}

export default UnggulanComponent