import React from 'react'
import styled from 'styled-components'

const CustomWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Wrapper = ({ children, style }) => {
  return <CustomWrapper style={style}>{children}</CustomWrapper>
}

export default Wrapper
