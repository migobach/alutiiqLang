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
// new grey : #3D3D3D

// title on homepage
export const MainHeader = styled.h1`
  color: white;
  font-size: 3em; 
`

// sub-title on homepage
export const MainHeaderContent = MainHeader.extend` 
  font-size: .5em;
`

// bottom section of homepage
export const SubHeader = styled.h2`
  color: white;
  font-size: 1.25em;
  line-height: 2;
`

// bottom section of homepage
export const SubHeaderContent = SubHeader.extend`
  font-size: 1em;
`

export const MainDiv = styled.div`
  padding: 8em;
  align-content: center;
`

export const CardHeader = styled.h3`
 color: #3B568C;
 font-size: 1.25em;
 line-height: 1.5;
`

export const ColumnHead = styled.h3`
  color: #3B568C;
  font-size: 1em;  
  line-height: 1.5;
`

// at the top of each main page (i.e. songs, materials, etc.)
export const SectionHead = styled.h3`
  color: #FBBD08;
  font-size: 1.5em;
  padding: 1em;
`

// song view conditionally rendered component song title 
export const SongHead = styled.h3`
  color: #FBBD08;
  font-size: 1.5em;
`

export const WordStyle = styled.h3`
  color: #FBBD08;
  font-size: 2.5em;
`

// green focused blocks header
export const GreenHead = styled.h3`
  color: #508365;
  font-size: 1.5em;
  padding: .5em;
`

export const SubSectionHead = styled.h3`
  color: #FBBD08;
  font-size: 1.5em;
  padding: 50px;
  text-align: center;
`

export const ContentHead = styled.h3`
  color: #ECA414;
  font-size: 1.5em;
  padding: .5em;
`

// removed padding: .5em in order to make the dictionary view a bit cleaner - not sure how it will impact everything else. 
export const ContentStyle = styled.p`
  font-size: 1em;
  color: #3D3D3D;
`

export const SongStyle = styled.p`
font-size: 1em;
color: #3D3D3D;
text-align: center;
padding: 1em;
`
// used in the erinarpet return on the AlutiiqNews page. Used to make the topic justified left
export const SongStyleLeft = SongStyle.extend`
font-size: 1em;
color: #3D3D3D;
padding: 1em;
`
//////////////////////////////////////////////////////////////////make sure to change all the px to em - below is a 14 px. 
export const ContentStyleWhite = styled.div`
  color: white;
  line-height: 2;
  font-size: 1em;
  text-align: center;
  padding-bottom: 14px;
`

export const WhiteTitle = styled.h4`
  color: white;
  font-size: 1.5em;
`

export const GreyTitle = styled.h4`
  color: #3D3D3D;
  font-size: 1.25em;
`

export const ContentStyleQuote = ContentStyleWhite.extend`
  font-size: 1em;
  line-height: 1.5;
  text-align: left;
`

export const SpecialDiv = styled.div`
  padding: 1.5em;
`

export const SongDiv = SpecialDiv.extend`
  padding: 5em;
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
  padding: 4em;
  align-content: center;
  background-position: center center;
  background-size: cover;
  height: auto;
`

export const BlueDiv = GreenDiv.extend`
  background-color: #3B568C;
`

export const ContainerPad = styled.div`
  margin: 2em;
`

export const Div = styled.div`
  height: 35em;
  width: auto;
  padding: 1em;
  overflow: auto;
`
export const SongHeight = Div.extend`
  height: 85em;
`

// export const SongDiv = styled.div`
//   height: 900px;
//   width: auto;
//   padding: 50px;
//   overflow: auto;
 
// `

export const IconHover = styled(Icon)`
  font-size: 3em !important;
  padding-top: 10px;
  &:hover {
  transform: scale(1.33)
  }`

export const BodyLink = styled.a`
  color: #508365;
  &:visited { text-decoration: none; color: #508365; }
  &:hover { text-decoration: none; color: #ECA414; }
  &:focus { text-decoration: none; color: #ECA414; }
  &:hover, a:active { text-decoration: none; color: #ECA414 }
`

export const FootLink = styled.a`
  color: #3D3D3D;
  &:visited { text-decoration: none; color: #3D3D3D; }
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

export const IconLinkGrey = styled.a`
  color: color: #3D3D3D;
  &:visited { text-decoration: none; color: #3D3D3D; }
  &:hover { text-decoration: none; color: #3D3D3D; }
  &:focus { text-decoration: none; color: #3D3D3D; }
  &:hover, a:active { text-decoration: none; color: #3D3D3D; }
`

export const LinkHead = styled.h3`
  color: #508365;
  font-size: 1.5em;
  padding: .5em;
`

export const GreenLink = styled.a`
  color: #508365;
  &:hover { text-decoration: none; color: #3D3D3D; }
`

export const Watermark = styled.h1`
  color: #737373;
  text-align: center;
  align-content: center;
  font-size: 1.5em;
  line-height: 2;
`

export const Pointer = styled.div`
  cursor: pointer;
`