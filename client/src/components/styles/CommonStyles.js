import styled from 'styled-components'
import {
  Icon,
} from 'semantic-ui-react'

// yellow: #ECA414
// semantic-yellow: #FBBD08
// red: #D91A1A
// green: #508365
// beige: #EAD8C2
// blue: #3B568C
// grey: #A9A9A9

export const MainHeader = styled.h1`
  color: white;
  font-size: 5em; 
`

export const MainHeaderContent = MainHeader.extend`
  font-size: .5em;
`

export const SubHeader = styled.h2`
  color: white;
  font-size: 2.5em;
  line-height: 2;
`

export const SubHeaderContent = SubHeader.extend`
  font-size: 1.5em;
`

export const MainDiv = styled.div`
  padding: 200px;
  align-content: center;
`

export const CardHeader = styled.h3`
 color: #3B568C;
 font-size: 2em;
 line-height: 1.5;
`

export const ColumnHead = styled.h3`
  color: #3B568C;
  font-size: 1.5em;  
  line-height: 1.5;
`

export const SectionHead = styled.h3`
  color: #FBBD08;
  font-size: 2.5em;
  padding: 65px;
`
export const GreenHead = styled.h3`
  color: #508365;
  font-size: 2.5em;
  padding: 65px;
`

export const SubSectionHead = styled.h3`
  color: #FBBD08;
  font-size: 1.5em;
  padding: 50px;
`

export const ContentHead = styled.h3`
  color: #ECA414;
  font-size: 1.5em;
  padding: 15px;
`

export const ContentStyle = styled.p`
  font-size: 1.5em;
  color: #A9A9A9;
`

export const ContentStyleWhite = styled.div`
  color: white;
  line-height: 2;
  font-size: 1.5em;
  text-align: center;
  padding-bottom: 14px;
`

export const WhiteTitle = styled.h4`
  color: white;
  font-size: 2em;
`

export const GreyTitle = styled.h4`
  color: #A9A9A9;
  font-size: 2em;
`

export const ContentStyleQuote = ContentStyleWhite.extend`
  font-size: 2em;
  line-height: 1.5;
  text-align: left;
`

export const CenterDiv = styled.div`
  text-align: center;
`

export const SpecialDiv = styled.div`
  padding: 50px;
`

export const QuoteDiv = SpecialDiv.extend`
  border: 1px solid #D3D3D3;
  text-align: center;
`

export const QuotePerson = styled.div`
  text-align: right;
`

export const SpecialDivCenter = SpecialDiv.extend`
  align-content: center;
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

export const BlueDiv = GreenDiv.extend`
  background-color: #3B568C;
`

export const ContainerPad = styled.div`
  margin: 50px;
`

export const Div = styled.div`
  height: 500px;
  width: auto;
  padding: 50px;
  overflow: auto;
`

export const IconHover = styled(Icon)`
  font-size: 5em !important;
  padding-top: 10px;
  &:hover {
  transform: scale(1.33)
}
`
export const BodyLink = styled.a`
  color: #508365;
  &:visited { text-decoration: none; color: #508365; }
  &:hover { text-decoration: none; color: #ECA414; }
  &:focus { text-decoration: none; color: #ECA414; }
  &:hover, a:active { text-decoration: none; color: #ECA414 }
`

export const FootLink = styled.a`
  color: #A9A9A9;
  &:visited { text-decoration: none; color: #A9A9A9; }
  &:hover { text-decoration: none; color: #508365; }
  &:focus { text-decoration: none; color:#508365; }
  &:hover, a:active { text-decoration: none; color:#508365 }
`

export const IconLink = styled.a`
  color: white;
  &:visited { text-decoration: none; color: white; }
  &:hover { text-decoration: none; color: white; }
  &:focus { text-decoration: none; color: white; }
  &:hover, a:active { text-decoration: none; color: white; }
`

export const LinkHead = styled.h3`
  color: #508365;
  font-size: 2.5em;
  padding: 20px;
`

export const GreenLink = styled.a`
  color: #508365;
  &:hover { text-decoration: none; color: #A9A9A9; }
  
`