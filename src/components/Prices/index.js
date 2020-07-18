import Title from "../Title";
import { Container, Items, Item } from "./styles";

function Prices() {
  return (
    <Container id="prices">
      <Title>PREÇO DISCADORES</Title>

      <Items>
        <Item>
          <div>
            <h2>DISCADOR PREDITIVO (CALLCENTER)</h2>
            <h3>tecnologia voip</h3>

            <ul>
              <li>Para dispositivos celulares <span>R$ 0,09</span></li>
              <li>Para aparelhos fixo R$ <span>0,03</span></li>
            </ul>

            <p className="item-price">R$ 99,00 licença (PA)</p>
          </div>
        </Item>

        <Item active>
          <div>
            <h2>URA REVERSA</h2>
            <h3>tecnologia voip</h3>

            <ul>
              <li>3 robôs</li>
              <li>3 canais de ligação</li>
              <li>2 sistemas para vendas </li>
              <li>1 sistema para gestão</li>
              <li>Para dispositivos celulares <span>Ilimitado</span></li>
              <li>Para aparelhos fixo <span>Ilimitado</span></li>
            </ul>

            <p className="item-price">
              R$ 995,00
            </p>
          </div>
        </Item>

        <Item>
          <div>
            <h2>DISCADOR CLICK TOCALL</h2>
            <h3>tecnologia voip</h3>

            <ul>
              <li>Para dispositivos celulares <span>Ilimitado</span></li>
              <li>Para aparelhos fixo <span>Ilimitado</span></li>
            </ul>

            <p className="item-price">
              R$ 125,00 (PA)
            </p>
          </div>
        </Item>
      </Items>
    </Container>
  )
}

export default Prices;
