import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import { quizQuestions } from './../data'

export const Title = styled.h1`
  margin-bottom: 0;
  display: block;
`
export const SubTitle = styled.h3`
  display: block;
`

const Question = styled.div`
  width: 500px;
`
const Options = styled.span`
  display: block;
  cursor: pointer;
  ${(props) => props.selected && 'background: #a7ffb1;'}
  &:hover {
    border-right: 1px solid #7dff8c;
    border-left: 1px solid #7dff8c;
  }
`
const Button = styled.button`
  cursor: pointer;
  width: 500px;
  border: 1px solid #7dff8c;
  background: #a7ffb1;
  height: 50px;
`

const Quiz = () => {
  const [question, setQuestion] = useState(quizQuestions)
  const [currentScore, setCurrentScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const onOptionSelect = (quesIndex, opt) => {
    question[quesIndex].selected = opt
    setQuestion([...question])
    setShowScore(false)
  }

  useEffect(() => {
    if (showScore) {
      document.querySelector('#score').scrollIntoView({ behavior: 'smooth' })
    }
  }, [showScore])

  const onSubmit = () => {
    const score = question.reduce((score, currentQues, index) => {
      if (currentQues.selected === currentQues.answer) {
        score = score + 1
      }
      return score
    }, 0)
    setCurrentScore(score)
    setShowScore(true)
  }
  return (
    <Wrapper>
      <Title>Quiz on Triangles</Title>
      <SubTitle>For each correct answer you will get 1 point</SubTitle>
      {question.map((ques, index) => (
        <Question key={ques.question + index}>
          <h3>{index + 1 + ' - ' + ques.question}</h3>
          {ques.options.map((opt, ind) => (
            <Options
              key={opt + ind}
              onClick={() => onOptionSelect(index, opt)}
              selected={ques.selected === opt}>
              {ind + 1 + ' - ' + opt}
            </Options>
          ))}
          <br />
        </Question>
      ))}
      <Button onClick={onSubmit}>SUBMIT</Button>
      <br />
      {showScore && <h3 id='score'>Current Score: {currentScore}</h3>}
      <br />
    </Wrapper>
  )
}

export default Quiz
