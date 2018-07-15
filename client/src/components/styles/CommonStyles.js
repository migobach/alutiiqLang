import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const CardHeader = styled.h3`
 color: #D91A1A;
 font-size: 2em;
 line-height: 1.5;
`
export const ColumnHead = styled.h3`
color: #B2AC03;
font-size: 1.5em;  
line-height: 1.5;
`

export const SectionHead = styled.h3`
color: #ECA414;
font-size: 2em;
padding: 65px;
`

export const SubSectionHead = styled.h3`
color: #ECA414;
font-size: 1.5em;
padding: 50px;
`

export const ContentHead = styled.h3`
color: #ECA414;
font-size: 1.5em;
padding: 15px;
`

export const ContentStyle = styled.p`
align-content: center;
font-size: 1.5em;
color: #A9A9A9;
`

export const ContentStyleWhite = ContentStyle.extend`
  color: white;
`

export const SpecialDiv = styled.div`
padding: 50px;
`

export const GreenDiv = styled.div`
background-color: #508365;
color: white;
padding: 150px;
align-content: center;
background-position: center center;
background-size: cover;
height: auto;
`

export const ContainerPad = styled.div`
margin: 50px;
`




// export const CommonButton = styled(Button)`
//   background-color: ${ props => buttonColor(props) } !important;
//   color: white !important;
//   &:hover {
//     background-color: black !important;
//   }
// `
// export const Flex = styled.div`
//   display: flex;
//   justify-content: ${ props => props.justifyContent };
//   align-items: ${ props => props.alignItems };
//   align-self: ${ props => props.alignSelf };
//   width: ${ props => props.full ? '100%' : '' };
//   height: ${ props => props.height };
//   flex-direction: ${ props => props.direction || 'row' };
//   padding-top: ${ props => props.paddingTop || 0 }px;
// `

// export const FlexNum = styled.div`
//   flex: ${ props => props.num };
//   align-self: ${ props => props.alignSelf };
// `

// export const LinkEnabled = styled(Link)`
//   color: white !important;
// `
// export const LinkDisabled = styled(Link)`
//   color: ${ props => props.theme.lockedText } !important;
// `

// export const CourseContainer = styled.div`
//   padding: 20px;
//   width: 100%;
// `

// export const FullWidth = styled.div`
//   width: 100%;
// `

// export const Pointer = styled.div`
//   cursor: pointer;
// `
