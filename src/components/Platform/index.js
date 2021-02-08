import { Container, Content, Left, Right } from "./styles";
import Title from "../Title";

function Platform() {
  return (
    <Container>
      <Title white>PLATAFORMA BASE</Title>

      <Content>
        <Left>
          <h2>PROFISSIONALIZE SEU NEGÓCIO</h2>
          <h3>Personalizamos toda a estrutura de sua loja</h3>

          <p>
            Relatório de comissões a esteiras de digitação, proporcionando a sua
            equipe uma visão completa de todo o andamento do contrato. E a você
            um controle preciso de rendimentos do seu negócio, com estratégia e
            precisão.
          </p>
        </Left>
        <Right>
          <ul>
            <li>SIMULADOR INTELIGENTE DE PROPOSTA</li>
            <li>GESTÃO DE EQUIPE HOME OFFICE</li>
            <li>RELATÓRIOS DE COMISSÕES</li>
            <li>MAILLING</li>
            <li>WHATSAPP INTEGRADO</li>
            <li>SMS</li>
            <li>EXTRATO ONLINE</li>
            <li>CONSULTA BENEFÍCIO (3 SERVIDORES)</li>
          </ul>
        </Right>
      </Content>

      <a href="#contact" className="link">
        CONTRATE AGORA POR R$ 160,00 / MÊS
      </a>
    </Container>
  );
}

export default Platform;
