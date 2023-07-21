import React from 'react'
import QuizCard from '../components/QuizCard'
import { Container, Row, Col } from 'react-bootstrap'

const QuizPage = ({ quizData, currentQuestion, handleNextQuestion, handleScoreIncrement }) => {

    const quizItem = quizData[currentQuestion];

    return (
        <Container className='vh-100 d-flex align-items-center justify-content-center'>
            <Row className='w-100'>
                <Col lg={{ span: 8, offset: 2 }} >
                    <QuizCard item={quizItem} handleNextQuestion={handleNextQuestion} handleScoreIncrement={handleScoreIncrement} />
                </Col>
            </Row>
        </Container>
    )
}

export default QuizPage