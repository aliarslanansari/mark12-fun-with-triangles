import { useRef, useState } from 'react'
import Wrapper from '../components/Wrapper'
import { Input, Label } from './IsTriangle'
import { Button, Title } from './Quiz'

const AreaOfTriangle = () => {
  const [message, setMessage] = useState('')
  const sideOne = useRef()
  const sideTwo = useRef()
  const sideThree = useRef()

  const onSubmit = () => {
    const [firstSideValue, secondSideValue, thirdSideValue] = [
      sideOne.current.value,
      sideTwo.current.value,
      sideThree.current.value,
    ].map((i) => parseInt(i))

    if (
      firstSideValue + secondSideValue > thirdSideValue &&
      secondSideValue + thirdSideValue > firstSideValue &&
      firstSideValue + thirdSideValue > secondSideValue
    ) {
      const semiPerimeter =
        (firstSideValue + secondSideValue + thirdSideValue) / 2

      const result = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - firstSideValue) *
          (semiPerimeter - secondSideValue) *
          (semiPerimeter - thirdSideValue)
      ).toFixed(4)
      setMessage(`Area of a triangle using heron's formula is ${result} units`)
    } else {
      setMessage('Enter valid side lengths')
    }
  }
  return (
    <Wrapper>
      <Title>Calculate Area of a triangle</Title>
      <Label htmlFor='angle1'>Enter first side of triangle</Label>
      <Input type='text' id='angle1' ref={sideOne} />
      <Label htmlFor='angle2'>Enter second side of triangle</Label>
      <Input type='text' id='angle2' ref={sideTwo} />
      <Label htmlFor='angle2'>Enter third side of triangle</Label>
      <Input type='text' id='angle3' ref={sideThree} />
      <h1>{message}</h1>
      <Button onClick={onSubmit}>SUBMIT</Button>
    </Wrapper>
  )
}

export default AreaOfTriangle
