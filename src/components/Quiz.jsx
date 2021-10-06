import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import questionData from '../data/questions.json'
import './Quiz.styles.css'

function Quiz () {
  // setting initial score state to 0
  const [score, setScore] = useState(0)


  // whatever id we fetch from our json data, will be the parameter in our URl
  const {id} = useParams()
  const question = questionData.find((question) => question.id === id)


  // check user answer function
  // if the user selects the asnwer with the isCorrect property value equal to true,
  // the score state is updated by 1
  // if not, the score state stays the same
  const checkUserAnswer = (isCorrect) => {
    isCorrect ? setScore(score + 1) : setScore(score + 0)
  }

    return (
        <>
          <div>
            { id < 11 ? (
              <div key={question.id}>
                <h2>{question.question}</h2>
                <Link to={`/quiz/${Number(id) + 1}`} >
                  <div>
                    <div>
                      <button onClick={() => checkUserAnswer(question.options[0].isCorrect)}>{question.options[0].type}. {question.options[0].option}</button>
                    </div>
                    <div>
                      <button onClick={() => checkUserAnswer(question.options[1].isCorrect)}>{question.options[1].type}. {question.options[1].option}</button>
                    </div>
                    <div>
                      <button onClick={() => checkUserAnswer(question.options[2].isCorrect)}>{question.options[2].type}. {question.options[2].option}</button>
                    </div>
                    <div>
                      <button onClick={() => checkUserAnswer(question.options[3].isCorrect)}>{question.options[3].type}. {question.options[3].option}</button>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div>
                <h1>Your final score is {score}/10</h1>
                { score < 5 ? (
                  <div>
                  <h1>Almost there!</h1>
                  <Link to='/' >
                    <button>Try Again</button>
                  </Link>
                  </div>
                  ) : (
                    <h1>Well done!</h1>
                    )}
              </div>
            )}
          </div>
        </>
    )
}

export default Quiz
