import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import { Button, Title } from './Quiz'

export const Label = styled.label`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`

export const Input = styled.input`
  font-size: 2rem;
  border-radius: 0.3rem;
`

const IsTriangle = () => {
  const [message, setMessage] = useState('')
  const angleOne = useRef()
  const angleTwo = useRef()
  const angleThree = useRef()
  const onSubmit = () => {
    const [angle1, angle2, angle3] = [
      angleOne.current.value,
      angleTwo.current.value,
      angleThree.current.value,
    ].map((i) => parseInt(i))
    const sum = angle1 + angle2 + angle3
    if (sum === 180) {
      setMessage('Yay, the angles form a triangle!')
    } else {
      setMessage("Oh Oh! The angle doesn't form a triangle")
    }
  }
  return (
    <Wrapper>
      <Title>Angles of Triangle</Title>
      <Label htmlFor='angle1'>Angle1</Label>
      <Input type='text' id='angle1' ref={angleOne} />
      <Label htmlFor='angle2'>Angle2</Label>
      <Input type='text' id='angle2' ref={angleTwo} />
      <Label htmlFor='angle3'>Angle3</Label>
      <Input type='text' id='angle3' ref={angleThree} />
      <h1>{message}</h1>
      <Button onClick={onSubmit}>SUBMIT</Button>
    </Wrapper>
  )
}

export default IsTriangle
