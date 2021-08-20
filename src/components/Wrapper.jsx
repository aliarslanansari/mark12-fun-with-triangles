import React from 'react'
import styled from 'styled-components'

const CustomWrapper = styled.div`
  margin: 0 auto;
  width: 100vw;
`

const Wrapper = ({ children, style }) => {
  return <CustomWrapper style={style}>{children}</CustomWrapper>
}

export default Wrapper
