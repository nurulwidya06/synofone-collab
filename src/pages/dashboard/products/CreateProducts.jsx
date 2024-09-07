import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import DefaultLayout from '../../../components/dashboard/DefaultLayout'

const CreateProducts = () => {
  return (
    <DefaultLayout>
        <Card className = 'p-3 animated fadeInDown border-0'>
            <h1 className = 'mb-3'>New Products</h1>
            <Form>
                <Form.Group className = 'mb-2'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type = 'file' placeholder = 'Image'/>
                </Form.Group>
                <Form.Group className = 'mb-2'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type = 'text' placeholder = 'Masukkan Title' className='pb-4'/>
                </Form.Group>
                <Form.Group className = 'mb-2'>
                    <Form.Label>Spesification</Form.Label>
                    <Row>
                        <Col md={3}>
                            <Form.Control type='text' placeholder='chip' className = 'mb-2'></Form.Control>
                        </Col>
                        <Col md={2}>
                            <Form.Control type='text' placeholder='cpu' className = 'mb-2'></Form.Control>
                        </Col>
                        <Col md={2}>
                            <Form.Control type='text' placeholder='gpu' className = 'mb-2'></Form.Control>
                        </Col>
                        <Col md={2}>
                            <Form.Control type='number' placeholder='ukuran layar' className = 'mb-2'></Form.Control>
                        </Col>
                        <Col md={3}>
                            <Form.Control type='text' placeholder='jenis layar' className = 'mb-2'></Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className = 'mb-2'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type='number' placeholder='Masukkan Price'/>
                </Form.Group>
                <Form.Group className = 'mb-2'>
                    <Form.Label>Qty</Form.Label>
                    <Form.Control type='number' placeholder='Masukkan Qty'/>
                </Form.Group>
                <Form.Group className = 'mb-2'>
                    <Form.Label>Warna</Form.Label>
                    <Form.Control type='text' placeholder='Masukkan Warna'/>
                </Form.Group>
                <Button className = 'btn-primary' size='sm' type='submit'>Save</Button>
            </Form>
        </Card>
    </DefaultLayout>
  )
}

export default CreateProducts