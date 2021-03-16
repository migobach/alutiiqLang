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
// lighter grey: #dbdbdb
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
// this was color: white;
export const SubHeader = styled.h2`
  color: #3D3D3D;
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
  padding: 3.125em;
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
  text-align: center;
`

export const ContentStyleCenter = ContentStyle.extend`
  text-align: center;
`

export const SongStyle = styled.p`
font-size: 1em;
color: #3D3D3D;
text-align: center;
padding: 1em;
`
// used in search render on home page
export const SongStyleWhite = SongStyle.extend`
color:white;
`

// used in the erinarpet return on the AlutiiqNews page. Used to make the topic justified left
export const SongStyleLeft = SongStyle.extend`
font-size: 1em;
color: #3D3D3D;
padding: 1em;
`

export const ContentStyleWhite = styled.div`
  color: white;
  line-height: 2;
  font-size: 1em;
  text-align: center;
  padding-bottom: .875em;
`
export const ContentStyleWhiteLeft = styled.div`
  color: white;
  line-height: 2;
  font_size: 1em;
  padding-bottom: .875em;
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

export const ContentStyleQuoteBig = ContentStyleWhite.extend`
  font-size: 2.5em;
`

export const SpecialDiv = styled.div`
  padding: 1.5em;
`

export const SpecialDivBorder = styled.div`
  padding: 2.5em;
  border: .1rem solid #dddbdb;
  border-radius: .625em;
  text-align: center;
`

export const SongDiv = styled.div`
  padding: 5em;
`

export const QuotePerson = styled.div`
  text-align: right;
`

export const SpecialDivCenter = SpecialDiv.extend`
  text-align: center;
`

export const GreenDiv = styled.div`
  background-color: #508365;
  color: white;
  padding: 4em;
  align-content: center;
  background-position: center center;
  background-size: cover;
  height: auto;
  width: auto;
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

export const IconHover = styled(Icon)`
  font-size: 3em !important;
  padding-top: .625em;
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

export const BodyLinkBig = BodyLink.extend`
  font_size: 3em;
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

export const LinkHeadA = styled.a`
  font-size: 1.5em;
  padding: .5em;  
  color: #D91A1A;
  &:hover { text-decoration: none; color: #3D3D3D; }
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

export const CreditWatermark = styled.p`
  color: #dbdbdb;
  text-align: right;
  font-size: .65em;
  line-heigh: 2;
  padding: 2em;
`

export const Pointer = styled.div`
  cursor: pointer;
`