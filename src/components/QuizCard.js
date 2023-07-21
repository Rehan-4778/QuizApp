import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const QuizCard = ({ item, handleNextQuestion, handleScoreIncrement }) => {

    const [isSelected, setIsSelected] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedOptIndex, setselectedOptIndex] = useState(null);
    const [answerIndex, setAnswerIndex] = useState(null);

    useEffect(() => {
        setAnswerIndex(item.options.indexOf(item.answer))
    }, [item])

    const handleSelectOption = (index) => {

        if (isSelected) {
            return;
        }
        setIsSelected(true)
        setselectedOptIndex(index)

        if (item.options[index] === item.answer) {
            setIsCorrect(true)
            handleScoreIncrement();
        }
        else {
            console.log('Wrong Answer')
        }
    }

    const handleNextButton = () => {
        setIsSelected(false);
        setIsCorrect(false);
        setselectedOptIndex(null);
        handleNextQuestion();
    }

    return (
        <Card className='text-white px-2 py-2 border-seconadry'
            style={{ backgroundColor: 'rgb(46, 57, 67)' }}
        >
            <Card.Header>
                <div className='d-flex align-items-start gap-lg-4 gap-1'>
                    <h5 className='flex-grow-1 flex-shrink-1'>{item.question}</h5>
                    <h5 className='flex-shrink-0' style={{ color: 'rgb(107, 214, 26)' }}>
                        {item.id} / 10
                    </h5>
                </div>
            </Card.Header>
            <Card.Body>
                {
                    item.options.map((option, index) => {
                        return <Button key={index} variant="dark"
                            className={`w-100 mt-3 text-start ${isSelected && answerIndex === index ? 'bg-success' : ''}`}
                            style={{
                                backgroundColor:
                                    isSelected ?
                                        isCorrect ? selectedOptIndex === index ? 'green' : ''
                                            : selectedOptIndex === index ? 'red' : ''
                                        : ''
                            }}
                            onClick={() => handleSelectOption(index)}
                        >
                            {option}</Button>
                    })
                }
                <Button disabled={!isSelected} variant="primary" className='w-100 mt-3 fw-bold'
                    onClick={handleNextButton}
                >
                    Next Question
                </Button>
            </Card.Body>
        </Card >
    )
}

export default QuizCard