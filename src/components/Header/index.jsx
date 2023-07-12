import {
  Container,
  Content,
  ImageLogo,
} from './styles';
import whatsSvg from '../../assets/icons/whatsapp.svg';

export function Header(){
  return (
      <Container>
          <Content>
          <a href="https://api.whatsapp.com/send/?phone=47999327137">  
          <button>            
              <ImageLogo src={whatsSvg} alt="stackX" />
              </button>
            </a> 

            <a href="https://portifolio-rafarz76dev.netlify.app/">  
              <button>
              <img  src="https://github.com/RafaRz76Dev.png" />
              </button>
              </a>

              
          </Content>
      </Container>
  );
}
