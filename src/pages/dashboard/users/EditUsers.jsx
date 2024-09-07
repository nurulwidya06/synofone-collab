import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import DefaultLayout from '../../../components/dashboard/DefaultLayout'

const EditUsers = () => {
  return (
    <DefaultLayout>
        <Card className = 'p-3 animated fadeInDown border-0'>
            <h1 className = 'mb-3'>Edit Users</h1>
            <Form>
                <Form.Group className = 'mb-2'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type = 'text' placeholder = 'Masukkan Username'/>
                </Form.Group>
                <Form.Group className = 'mb-2'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type = 'email' placeholder = 'Masukkan Email'/>
                </Form.Group>
                <Form.Group className = 'mb-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = 'password' placeholder = 'Masukkan Password'/>
                </Form.Group>
                <Button className = 'btn-primary' size='sm' type='submit'>Save</Button>
                <Button className = 'btn-danger m-2' size='sm' type='submit'>Close</Button>
            </Form>
        </Card>
    </DefaultLayout>
  )
}

export default EditUsers