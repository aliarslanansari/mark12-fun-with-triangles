import React, { useRef, useState } from 'react'
import Wrapper from '../components/Wrapper'
import { Input, Label } from './IsTriangle'
import { Button, Title } from './Quiz'

const calculateSumOfSquare = (a, b) => {
  const sumOfSquares = a * a + b * b
  return sumOfSquares
}

function calculateHypotenuse(sideOne, sideTwo) {
  const sumOfSquares = calculateSumOfSquare(sideOne, sideTwo)
  return Math.sqrt(sumOfSquares)
}

const Hypotenuse = () => {
  const [message, setMessage] = useState('')
  const sideOne = useRef()
  const sideTwo = useRef()

  const onSubmit = () => {
    const [side1, side2] = [sideOne.current.value, sideTwo.current.value].map(
      (i) => parseInt(i)
    )
    const lengthOfHypotenuse = calculateHypotenuse(side1, side2)
    setMessage('The length of hypotenuse is ' + lengthOfHypotenuse.toFixed(3))
  }

  return (
    <Wrapper>
      <Title>Calculate Hypotenuse of a triangle</Title>
      <Label htmlFor='angle1'>Enter base value (a) =</Label>
      <Input type='text' id='angle1' ref={sideOne} />
      <Label htmlFor='angle2'>Enter height value (b) =</Label>
      <Input type='text' id='angle2' ref={sideTwo} />
      <h1>{message}</h1>
      <Button onClick={onSubmit}>SUBMIT</Button>
    </Wrapper>
  )
}

export default Hypotenuse
