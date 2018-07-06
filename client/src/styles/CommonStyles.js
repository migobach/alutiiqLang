import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const CommonButton = styled(Button)`
  background-color: ${ props => props.theme.primary } !important;
  color: white !important;
  &:hover {
    background-color: black !important;
`
export const Flex = styled.div`
  display: flex;
  justify-content: ${ props => props.justifyContent };
  align-items: ${ props => props.alignItems };
  align-self: ${ props => props.alignSelf };
  width: ${ props => props.full ? '100%' : '' }
`
export const LinkEnabled = styled(Link)`
  color: white !important;
`
export const LinkDisabled = styled(Link)`
  color: ${ props => props.theme.lockedText } !important;
`

export const CourseContainer = styled.div`
  padding: 20px;
  width: 100%;
`

export const FullWidth = styled.div`
  width: 100%;
`

export const Pointer = styled.div`
  cursor: pointer;
`
