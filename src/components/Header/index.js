import React from 'react';
import { Container, Content, Nav } from './styles';

import logo from '../../assets/images/logo-white.png';

function Header() {
  return (
    <Container>
      <Content>
        <div>
          <a href="#">
            <img src={logo} alt="" title="" />
          </a>
        </div>
        <Nav>
          <ul>
            <li>
              <a href="#">QUEM SOMOS</a>
            </li>
            <li>
              <a href="#">PARCEIROS</a>
            </li>
            <li>
              <a href="#">PREÇOS E PLANOS</a>
            </li>
            <li>
              <a href="#">CONTATO</a>
            </li>
          </ul>

          <a href="" className="open-system">
            ACESSAR SISTEMA
          </a>
        </Nav>
      </Content>
    </Container>
  );
}

export default Header;
