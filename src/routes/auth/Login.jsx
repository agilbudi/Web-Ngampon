import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../lib/context/user"
import { Button, Form, Col, Row, Container, InputGroup, Card } from 'react-bootstrap'
import { Blocker } from '../../components/Blocker'
import './Login.css'

export function Login() {
  const user = useUser()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleClick = () => {
    document.getElementById("blocker").style.display = 'block';
  };

  return (
    <>
      <Blocker />
      <Container fluid className='d-flex justify-content-center m-0 p-0 py-auto'>
        <Form className='my-5'>

          <Form.Group className='title pb-5'>
            <h1 className='display-3'>Masuk</h1>
            <span >Masuk untuk dapat mengakses fitur yang membutuhkan Autentikasi.</span>
          </Form.Group>

          <Card className='shadow-lg p-0' bg='light'>

            <Card.Header>Masukan data</Card.Header>
            <Card.Body>

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

            </Card.Body>

            <Card.Footer className="text-end">

              <Button variant="primary" onClick={handleClick}>
                Login
              </Button>
            </Card.Footer>

          </Card>
        </Form>
      </Container>
    </>
  )
}

        // <Container>
        //     <section>
        //         <h1>Login or Register</h1>
        //         <form>
        //             <input
        //                 type="email"
        //                 placeholder="Email"
        //                 value={email}
        //                 onChange={(event) => {
        //                     setEmail(event.target.value)
        //                 }} />
        //             <input
        //                 type="password"
        //                 placeholder="Password"
        //                 value={password}
        //                 onChange={(event) => {
        //                     setPassword(event.target.value)
        //                 }} />
        //             <div>
        //                 <button
        //                     className="button"
        //                     type="button"
        //                     onClick={() => user.login(email, password)}>
        //                     Login
        //                 </button>
        //                 <button
        //                     className="button"
        //                     type="button"
        //                     onClick={() => user.register(email, password)}>
        //                     Register
        //                 </button>
        //             </div>
        //         </form>
        //     </section>
        // </Container>