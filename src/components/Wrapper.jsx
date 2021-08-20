import React from 'react'
import styled from 'styled-components'

const CustomWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`

const Wrapper = ({ children, style }) => {
  return <CustomWrapper style={style}>{children}</CustomWrapper>
}

export default Wrapper
