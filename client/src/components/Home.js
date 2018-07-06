import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Segment, 
  Card,
  Icon,
} from 'semantic-ui-react'
import { Parallax, Background } from 'react-parallax'
import Banner from '../images/harbor.jpg'

const insideStyles = {
  
  padding: 20, 
  position: 'absolute', 
  top: '30%', 
  left: '50%', 
  transform: 'translate(-50%,-50%)',
  fontSize: 50,

  }


const Home = () => (
  <div>
    <Parallax
      bgImage={Banner}
      bgImageAlt="St. Paul Harbor, Kodiak, Alaska"
      strength={500}
    >
      <div style={{height: 900}}>
        <div style={insideStyles}>Liicugtukut Alutiit'stun</div>
      </div>
    </Parallax>

    <Segment>
      <Card.Group itemsPerRow={3} stackable={true}>
        <Card>
          <Card.Content header>
            Here is sample one
          </Card.Content>
          <Card.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida lorem tellus, a suscipit nunc faucibus vitae. Ut vestibulum bibendum feugiat. Mauris a turpis finibus, auctor eros at, ultrices massa. Nulla maximus, nibh eget tristique faucibus, nibh justo luctus risus, at pulvinar odio nunc ac urna. Donec accumsan metus eu orci eleifend, non pretium ex cursus. Nullam vitae diam a lorem malesuada scelerisque. Ut pharetra arcu velit, eu scelerisque nisi consectetur eget. Nam sollicitudin ante non sem fermentum, ac sagittis magna efficitur. Nam facilisis metus eget elit mattis, nec pharetra diam volutpat. Nulla facilisi. Donec tincidunt risus vitae ante porttitor aliquet. Nulla finibus at lorem pretium sagittis.
          </Card.Content>
          <Card.Content extra>
            <Icon name='linkify' />
          </Card.Content>
        </Card>

        <Card>
          <Card.Content header>
            Here is sample two
          </Card.Content>
          <Card.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida lorem tellus, a suscipit nunc faucibus vitae. Ut vestibulum bibendum feugiat. Mauris a turpis finibus, auctor eros at, ultrices massa. Nulla maximus, nibh eget tristique faucibus, nibh justo luctus risus, at pulvinar odio nunc ac urna. Donec accumsan metus eu orci eleifend, non pretium ex cursus. Nullam vitae diam a lorem malesuada scelerisque. Ut pharetra arcu velit, eu scelerisque nisi consectetur eget. Nam sollicitudin ante non sem fermentum, ac sagittis magna efficitur. Nam facilisis metus eget elit mattis, nec pharetra diam volutpat. Nulla facilisi. Donec tincidunt risus vitae ante porttitor aliquet. Nulla finibus at lorem pretium sagittis.
          </Card.Content>
          <Card.Content extra>
            <Icon name='linkify' />
          </Card.Content>
        </Card>

        <Card>
          <Card.Content header>
            Here is sample thre
          </Card.Content>
          <Card.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida lorem tellus, a suscipit nunc faucibus vitae. Ut vestibulum bibendum feugiat. Mauris a turpis finibus, auctor eros at, ultrices massa. Nulla maximus, nibh eget tristique faucibus, nibh justo luctus risus, at pulvinar odio nunc ac urna. Donec accumsan metus eu orci eleifend, non pretium ex cursus. Nullam vitae diam a lorem malesuada scelerisque. Ut pharetra arcu velit, eu scelerisque nisi consectetur eget. Nam sollicitudin ante non sem fermentum, ac sagittis magna efficitur. Nam facilisis metus eget elit mattis, nec pharetra diam volutpat. Nulla facilisi. Donec tincidunt risus vitae ante porttitor aliquet. Nulla finibus at lorem pretium sagittis.
          </Card.Content>
          <Card.Content extra>
            <Icon name='linkify' />
          </Card.Content>
        </Card>

      </Card.Group>
    </Segment>

    <Segment basic>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ex sit amet ligula ultrices, et commodo metus venenatis. Fusce sit amet feugiat leo, sit amet iaculis orci. Donec fringilla dui nec tortor semper, at rhoncus dui interdum. Fusce eu massa tortor. Morbi nec risus tellus. Fusce tempus nulla ut elit lobortis bibendum. Nullam fringilla lorem at facilisis ullamcorper.
      </p>
      <p>
      Pellentesque sed eros eu tortor viverra laoreet sit amet interdum massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam tempor enim diam, ac finibus mi placerat sit amet. Morbi malesuada maximus diam, id fermentum sem laoreet vitae. Sed eu orci id nisl iaculis pellentesque. Fusce fermentum, diam et condimentum bibendum, turpis libero aliquam arcu, a aliquet ligula turpis ac enim. Mauris a purus nec ex rhoncus dictum in at lectus. Fusce fringilla, arcu vel congue tristique, est urna commodo eros, vitae finibus risus nibh at ligula. Praesent in lacus aliquet dui venenatis posuere ut at neque.
      </p>
      <p>
      Aenean tristique volutpat purus, vel bibendum metus porttitor et. Duis turpis nibh, volutpat eu nisi at, tincidunt congue lacus. In orci elit, porttitor at luctus quis, interdum quis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget commodo tellus, sed varius eros. Nulla facilisi. Pellentesque ullamcorper nulla sapien, ut vulputate risus finibus sed. Curabitur non accumsan massa.
      </p>
      <p>
      Sed interdum lectus urna, ac dapibus quam malesuada quis. Etiam et enim ipsum. Vestibulum ornare ac erat vitae tempus. Suspendisse pulvinar rhoncus arcu, non scelerisque eros pulvinar in. Nullam molestie leo a ornare ornare. Aliquam dignissim lobortis finibus. Nunc porta commodo ligula id blandit. Morbi nec enim sit amet nisi aliquam blandit. In hac habitasse platea dictumst. Duis metus elit, bibendum in nisi vel, dictum commodo lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam id orci venenatis, dignissim purus at, rutrum magna. Aliquam ultrices nulla eget tellus eleifend mattis. Maecenas a tellus placerat, sollicitudin dolor et, venenatis turpis. Suspendisse id magna nec sem faucibus posuere.
      </p>
      <p>
      Nam vitae semper elit. Suspendisse rutrum magna a lorem pharetra, sed tempor nunc scelerisque. Vivamus viverra sapien at risus pharetra, id accumsan lacus blandit. Aliquam et justo at nisi gravida sollicitudin. Phasellus lacinia tellus quam, sit amet consectetur nisi placerat eu. In ac arcu risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula vitae quam ac placerat. Vivamus consequat eleifend velit vel imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat tellus enim. Integer id libero eu libero dictum dictum ut sit amet augue.
      </p>
    </Segment>
    
  </div>

)

export default Home
