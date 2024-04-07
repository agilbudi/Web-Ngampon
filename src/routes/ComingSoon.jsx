import React, { useEffect, useState } from 'react'
import { Row, Image, Container, Col, Card } from 'react-bootstrap'
import imgProgress from '../assets/inprogress.svg'
import './ComingSoon.css'
import {timer} from '../lib/timer'

export const ComingSoon = () => {
    timer()
    return (
        <Container id='body' fluid className='d-flex flex-column align-items-center m-0 p-0 py-auto'>

            <Row className="justify-content-md-center align-items-center my-auto">
                <Col md="6" className=''>
                    <p className="h1 page-title">We are launching soon</p>
                    <div id="timer" className="bd-cd-timer">
                        <Card className="text-center p-0 px-1">
                            <Card.Body className='p-0 my-1'>
                                <span className="time-count" id="days"></span>
                            </Card.Body>
                            <Card.Footer className='p-0 py-2'>
                                <span className="time-label">DAYS</span>
                            </Card.Footer>
                        </Card>
                        <Card className="text-center p-0 px-1">
                            <Card.Body className='p-0 my-1'>
                                <span className="time-count" id="hours"></span>
                            </Card.Body>
                            <Card.Footer className='p-0 py-2'>
                                <span className="time-label">HOURS</span>
                            </Card.Footer>
                        </Card>
                        <Card className="text-center p-0 px-1">
                            <Card.Body className='p-0 my-1'>
                                <span className="time-count" id="minutes"></span>
                            </Card.Body>
                            <Card.Footer className='p-0 py-2'>
                                <span className="time-label">MINUTES</span>
                            </Card.Footer>
                        </Card>
                        <Card className="text-center p-0 px-1">
                            <Card.Body className='p-0 my-1'>
                                <span className="time-count" id="seconds"></span>
                            </Card.Body>
                            <Card.Footer className='p-0 py-2'>
                                <span className="time-label">SECONDS</span>
                            </Card.Footer>
                        </Card>
                    </div>
                </Col>
                <Col md='6' className="d-md-flex align-items-center">
                    <Image className='img-fluid' src={imgProgress} alt="coming soon" />
                </Col>
            </Row>
        </Container>
    )
}
