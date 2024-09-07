import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Container fluid className='vh-100 d-flex justify-content-center align-items-center'>
        <Row className='w-100'>
            <Col xs={8} md={4} lg={3} className='mx-auto'>
                <Form className='p-4 shadow-sm border rounded'>
                    <h1 className='text-center mb-4'>Register</h1>
                    <Form.Group className='mb-3'>
                        <Form.Control className='mb-2' type='text' placeholder='Username'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control className='mb-2' type='email' placeholder='Email'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control className='mb-2' type='password' placeholder='Password'/>
                    </Form.Group>
                    <Button className='w-100 mb-3' size='sm'>
                        Login
                    </Button>
                    <p>Sudah punya akun <Link to='/admin/login' className='text-decoration-none'>Login</Link></p>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Register