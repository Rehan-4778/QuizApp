import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


const StartPage = ({ handleStartQuiz }) => {
   return (
      <Container className='vh-100 d-flex align-items-center justify-content-center'>
         <Row>
            <Col className='d-flex flex-column align-items-center justify-content-center'>
               <h1 className='text-white'> Basic React JS Quiz </h1>
               <Button type="button" className='fw-bold px-4 py-2 mt-3' variant="light"
                  onClick={handleStartQuiz}
               >
                  Start Quiz
               </Button>
            </Col>

         </Row>
      </Container>
   )
}

export default StartPage