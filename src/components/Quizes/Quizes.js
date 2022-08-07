
import React, { useState } from 'react';
import useQuestions from '../../hooks/useQuestions';
import '../Quizes/Quizes.css';


const Quizes = () => {
    const { questions, loading, error } = useQuestions();
    console.log(questions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [showScore, setShowScore] = useState(false);




    const handleCorrectAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        setClicked(true);
    }

    const handleNextQuestion = () => {
        setClicked(false);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    }



    return (
        <>
            {loading && <div>Loading..</div>}
            {error && <div>There was an error!</div>}
            {!loading && !error && questions && questions.length > 0 && (
                <>
                    <div className='app-wrapper'>
                        {showScore ? (
                            <div >
                                <div className="completed">Completed!</div>
                                <div className="score-section">Your Score is: {score} out of {questions.length}</div>

                            </div>
                        ) : (
                            <div>
                                <div className='question-section-wrapper'>
                                    <div className='question'>
                                        {currentQuestion + 1}/{questions.length} {questions[currentQuestion].title}
                                    </div>
                                </div>
                                <div className='answer-section-wrapper'>
                                    {questions[currentQuestion].options.map(answer => (
                                        <li className='answer-list' key={answer.title}>
                                            <button
                                                disabled={clicked}
                                                className={`answer-button ${clicked && answer.isCorrect ? "correct" : ""}`} onClick={() => handleCorrectAnswer(answer.isCorrect)}>{answer.title}
                                            </button>
                                        </li>
                                    ))}
                                </div>

                                <div>
                                    <button className='next-button' onClick={handleNextQuestion} disabled={!clicked}>Next</button>
                                </div>
                            </div>
                        )}
                    </div>

                </>
            )}
        </>
    );

};

export default Quizes;