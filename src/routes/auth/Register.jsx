import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { useUser } from "../../lib/context/user"
import { Button, Form, Col, Row, Container, InputGroup, Card, Popover } from 'react-bootstrap'
import {Blocker} from '../../components/Blocker'

import './Register.css'

export const Register = () => {
  const handleClick = () => {
    document.getElementById("over").style.display = 'block';
  };
  return (
    <>
    <Blocker/>
    <Container fluid className='d-flex justify-content-center m-0 p-0 py-auto'>

      <Form className='my-5'>
        <Form.Group className='title pb-5'>
          <h1 className='display-3'>Registrasi Akun</h1>
          <span >Buat akun untuk mengakses fitur-fitur tertentu.</span>
        </Form.Group>

        <Card className='shadow-lg p-0' bg='light'>

          <Card.Header>Masukan data</Card.Header>
          <Card.Body>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control placeholder="*harap masukan nama lengkap yang benar." />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} className='col-7' controlId="formNomorTelp">
                <Form.Label>Nomor telp.</Form.Label>
                <InputGroup>
                  <InputGroup.Text>+62</InputGroup.Text>
                  <Form.Control placeholder="823 . . ." />
                </InputGroup>
              </Form.Group>
            </Row>
          </Card.Body>

          <Card.Footer className='text-end'>

            <Button variant="primary" onClick={handleClick}>
              Submit
            </Button>
          </Card.Footer>

        </Card>
      </Form>
    </Container>
    </>
  )
}
