import React, {Component} from 'react'
import {
  Header,
  Divider,
} from 'semantic-ui-react'
import { Parallax } from 'react-parallax'
import {
  SpecialDiv,
  SectionHead,
  ContentStyle,
  LinkHeadA,
  BodyLinkBig,
  ContentStyleCenter,
} from '../styles/CommonStyles'
import GrouseGirl from '../../images/GrouseGirl.jpg'

class Stories extends Component {
  render() {
    return(
      <div>
        <Parallax
          bgImage={GrouseGirl}
          blur={{min: 5, max:1}}
          bgImageAlt="Teaching Alutiiq, Afognak Island, Alaska"
          strength={500}
        >
        <div style={{height: 400}}>
          <SpecialDiv>
            <Header textAlign="center">
              <SectionHead>
                <i>Qulianguat:</i> Stories
              </SectionHead>
            </Header>
            <ContentStyleCenter>
              Being able to sit and listen to traditional stories is an opportunity few of us can take advantage of. However, various institutions have collected or continue to collect traditional stories in both Alutiiq and English. Click on some of the links below to find narratives from across the Alutiiq Nation.
            </ContentStyleCenter>
          </SpecialDiv>
        </div>
    </Parallax>

{/* STORIES FROM THE ALUTIIQ MUSEUM */}

        <SpecialDiv>
          <LinkHeadA href='https://alutiiqmuseum.org/' traget='_blank'>
            Alutiiq Museum and Archaeological Repository
          </LinkHeadA>
          <Divider />
            <BodyLinkBig href='https://alutiiqmuseum.mukurtu.net/digital-heritage/nida-chya-christine-ignatin' target='_blank'>
              Nida Chya, Christine Ignatin
            </BodyLinkBig>
          <ContentStyle> 
            From the Alutiiq Museum and Archaeological Repository archives. Nida Chya and Christine Ignatin talk about putting fish up, making tamuuq (smoked salmon), using pink or "humpy" salmon for making smoked fish, and storing fish in the shed or "saRayaaq". (In Alutiiq)
          </ContentStyle>
          <br />

      
            <BodyLinkBig href='https://alutiiqmuseum.mukurtu.net/digital-heritage/fedosia-laktonen' target='_blank'>
              Fedosia Laktonen
            </BodyLinkBig>
          <ContentStyle> 
            From the Alutiiq Museum and Archaeological Repository archives. This recording contains an account of Fedosia Laktonen's childhood, as well as stories about an evil raven, a bear woman, a fox woman, and a girl who marries the moon. (ANLA ID: ANLCAS077) (In Alutiiq). The recording includes a transcript of the story. 
          </ContentStyle>
          <br />

          
            <BodyLinkBig href='https://alutiiqmuseum.mukurtu.net/digital-heritage/martha-matfay-natalie-jack' target='_blank'>
              Martha Matfay, Natalie Jack
            </BodyLinkBig>
          <ContentStyle> 
            From the Alutiiq Museum and Archaeological Repository archives. Martha Matfay and Natalie Jack talk about movies, gathering seafood and berries, and Christmas and wedding traditions. Reference notes are from Florence Pestrikoff, Mary Haakanson, and Michael Bach,and are titled Florence and Mary 20150728. (In Alutiiq) The recording includes a transcript.
          </ContentStyle>
          <br />

          
            <BodyLinkBig href='https://alutiiqmuseum.mukurtu.net/digital-heritage/karluk-stories-little-people-good-bad-luck' target='_blank'>
              Karluk Stories, Little People, Good and Bad Luck
            </BodyLinkBig>
          <ContentStyle> 
            From the Alutiiq Museum and Archaeological Repository archives. Recording is mostly in Alutiiq, with information about rocks, bears, and fairy tales.
          </ContentStyle>
          <br />

          
            <BodyLinkBig href='https://alutiiqmuseum.mukurtu.net/digital-heritage/old-harbor-iballok-lena-papa-g-mary-h' target='_blank'>
              Old Harbor Iballok, Lena A, Papa G, Mary H
            </BodyLinkBig>
          <ContentStyle> 
            From the Alutiiq Museum and Archaeological Repository archives. Recording is mostly in Alutiiq, with information about winds, birds, and bays. 
          </ContentStyle>
          <br />

{/* STORIES FROM NATIVE VILLAGE OF AFOGNAK */}
        <Divider hidden />
          <LinkHeadA href='https://www.afognak.org/' traget='_blank'>
            Native Village of Afognak
          </LinkHeadA>
          <Divider />
          
            <BodyLinkBig href='https://www.afognak.org/files/oral/hist/arch/Sun_and_Moon.mp3' target='_blank'>
              Sun and Moon
            </BodyLinkBig>
            <ContentStyle> 
              From the Native Village of Afognak Archives. Recording is mostly in Alutiiq, with information about winds, birds, and bays. 
            </ContentStyle>
          <br />

{/* STORIES FROM CANDACE  */}
        <Divider hidden />
          <LinkHeadA href='https://www.afognak.org/' traget='_blank'>
            Qulianguanek Litnauwilita
          </LinkHeadA>
          <Divider />
          
            <BodyLinkBig href='https://letsteachfromstories.weebly.com/qulianguaq-the-story.html' target='_blank'>
              Qateryuk
            </BodyLinkBig>
            <ContentStyle> 
              Originally documented by ethnologist Frank Golder in the early 1900s. He came to Alaska as the sole schoolteacher in the village of Unga for three years. Unga is an Unangan village, where Golder reports that he heard Alutiiq stories from a man from Kodiak Island. As one of the few literate community members there, he was asked to do many favors, which included reading and writing official documents, and letters. This story, <i>Qateryuk</i> may have been one of these stories. 
            </ContentStyle>
          <br />

{/* AUDIO FROM ALASKA NATIVE LANGUAGE ARCHIVE */}
          <Divider hidden />
          <LinkHeadA href='https://www.uaf.edu/anla/' traget='_blank'>
            Alaska Native Language Archive
          </LinkHeadA>
          <Divider />
          
            <BodyLinkBig href='https://letsteachfromstories.weebly.com/qulianguaq-the-story.html' target='_blank'>
              Lore of Kodiak Island
            </BodyLinkBig>
            <ContentStyle> 
              Originally collected by Dr. Jeff Leer. Lore of the Kodiak Alutiiq as told by Larry Matfay.
            </ContentStyle>
          <br />
            <BodyLinkBig href='https://www.uaf.edu/anla/collections/search/resultDetail.xml?resource=3206&sessionId=&searchId=' target='_blank'>
              Nydia Chya, Mary Haakanson, Sven Haakanson Jr.
            </BodyLinkBig>
            <ContentStyle> 
              Originally collected by Dr. Jeff Leer. Conversations and stories by Nydia Chy, Mary Haakanson, and Sven Haakanson Jr. Recorded in Old Harbor, Alaska. 
            </ContentStyle>
          <br />
            <BodyLinkBig href='https://www.uaf.edu/anla/collections/search/resultDetail.xml?resource=3201&sessionId=&searchId=' target='_blank'>
              Polly Inga, Mary Haakanson, Sven Haakanson Jr.
            </BodyLinkBig>
            <ContentStyle> 
              Side A:  Mary Haakanson, Sven Haakanson Jr.at home talking about everyday things in Old Harbor. Side B: Polly Inga looking at the Verb and Grammar of Kosbiaq (sp?) Alutiiq. It sounds like they are going over a textbook. At one point a man says Unit 9, page 108.  45:38
            </ContentStyle>
          <br />
            <BodyLinkBig href='https://www.uaf.edu/anla/collections/search/resultDetail.xml?resource=3182&sessionId=&searchId=' target='_blank'>
              Larry Matfay: Elicitations
            </BodyLinkBig>
            <ContentStyle> 
              Dr. Jeff Leer asks Larry Matfay for Alutiiq translations of English phrases. 
            </ContentStyle>
          <br />
            <BodyLinkBig href='https://www.uaf.edu/anla/collections/search/resultDetail.xml?resource=3181&sessionId=&searchId=' target='_blank'>
              Roy Nellie
            </BodyLinkBig>
            <ContentStyle> 
              Collected by Dr. Jeff Leer. Clear recording, discussion topics that include going by boat and hunting. Trapping foxes and getting were $6 for their skin, 12 cents for weasels. They did not get enough money for their work. Hunting bears and seals and sea lions. Staying in a sod house while hunting. Water would come in the sod house, the roof would leak. 
            </ContentStyle>
          <br />
        </SpecialDiv>

      </div>
        
        // 
        // 
    )
  }
}

export default Stories

// to add: 
