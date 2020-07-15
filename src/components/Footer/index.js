import { Container } from './styles';

function Footer() {
  const date = new Date();

  return (
    <Container>
      Consult - Crédito Inteligente © { date.getFullYear() } • Todos os direitos reservados
    </Container>
  )
}

export default Footer;
