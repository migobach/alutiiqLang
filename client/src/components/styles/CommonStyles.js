import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const CardHeader = styled.div`
 color: #B2AC03;
 font-size: 2em;
`
export const ColumnHead = styled.div`
color: #B2AC03;
font-size: 1.5em;  
line-height: 1.5;
`

export const SectionHead = styled.div`
color: #CC293A;
font-size: 2em;
padding: 65px;
`

export const SubSectionHead = styled.div`
color: #CC293A;
font-size: 1.5em;
padding: 50px;
`
export const ContentStyle = styled.div`
align-content: center;
color: #A9A9A9;
`
export const SpecialDiv = styled.div`
padding: 100px;

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
