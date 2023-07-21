import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const ResultPage = ({ score, handleRestartQuiz }) => {

  const message = score === 100 ? 'Perfect Score' : score >= 50 ? 'Good Score' : 'Better Luck Next Time';
  const messageColor = score === 100 ? 'bg-success' : score >= 50 ? 'bg-success' : 'bg-danger';

  return (
    <Container className='vh-100 d-flex align-items-center justify-content-center'>
      <Row className='w-100'>
        <Col className={`${messageColor} text-white py-4 rounded-3 d-flex flex-column align-items-center justify-content-center`}
          lg={{ span: 6, offset: 3 }}
          md={{ span: 6, offset: 3 }}
        >
          <h1 className='text-center'>{message}!</h1>
          <h3 className='text-center mt-2'>Your Score is {score} out of 100</h3>
          <Button type="button" className='fw-bold px-4 py-2 mt-3' variant="light"
            onClick={handleRestartQuiz}
          >
            Start Over
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ResultPage