import React from 'react'
import { Container } from 'react-bootstrap'
import {ComingSoon} from '../routes/ComingSoon'
import './Blocker.css'

export const Blocker = () => {
  return (
    <Container id='over' fluid className='m-0 p-0 py-auto overlay-content'>
        <ComingSoon/>
    </Container>
  )
}
