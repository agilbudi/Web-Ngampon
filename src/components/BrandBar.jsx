import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './BrandBar.css'

export const BrandBar = () => {
  const [showSecondLogo, setSecondLogo] = useState(true)

  useEffect(() => {
    const showLogo = () => {
      if (window.innerWidth < 576) {
        setSecondLogo(false)
      } else {
        setSecondLogo(true)
      }
    }
    window.addEventListener('resize', showLogo)
    return () => window.removeEventListener('resize', showLogo)
  }, [])
  return (
    <Container fluid>
      <Row className='brandBar justify-content-center align-items-center'>
        <Col className='mainLogo text-center p-0'>
          <Image src="https://firebasestorage.googleapis.com/v0/b/business-project-4040.appspot.com/o/public%2Flogo-karangtaruna-ngampon.png?alt=media&token=e0832986-0ceb-4616-a169-062ab44e1b36" />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={7} sm={7} xs={9} className='brandName text-start p-0 pe-2'>
          <p className='h2 m-0'>Padukuhan Ngampon</p>
          <p className='fs-6 m-0'>Kelurahan Watusigar, Kecamatan Ngawen</p>
        </Col>
        <Col className={showSecondLogo ? 'secondLogo text-center p-0 pe-3' : 'd-none'}>
          <a href='https://gunungkidulkab.go.id/' target={'_blank'}>
            <Image src="https://firebasestorage.googleapis.com/v0/b/business-project-4040.appspot.com/o/public%2Flogo-kab-gunungkidul-text.png?alt=media&token=11768962-35cf-4334-a4da-9410ef62f429" />
          </a>
        </Col>
      </Row>
    </Container>
  )
}
