import React from 'react'
import { Container } from 'react-bootstrap'
import {ComingSoon} from '../routes/ComingSoon'
import './Blocker.css'

export const Blocker = () => {
  return (
    <Container id='bloc' fluid className='m-0 p-0 overlay-content h-100'>
        <ComingSoon/>
    </Container>
  )
}
