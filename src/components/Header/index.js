import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll"

import { Container, Content, Nav } from './styles';

import logo from '../../assets/images/logo-white.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <Content>
        <div>
          <a href="#">
            <img src={logo} alt="" title="" />
          </a>
        </div>
        <Nav>
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="material-icons">
              menu
            </i>
          </button>
          <div className={`${isOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  QUEM SOMOS
                </Link>
              </li>
              <li>
                <Link
                  to="partners"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  PARCEIROS
                </Link>
              </li>
              <li>
                <Link
                  to="prices"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  PREÇOS E PLANOS
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  CONTATO
                </Link>
              </li>
            </ul>

            <a href="" className="open-system">
              ACESSAR SISTEMA
            </a>
          </div>
        </Nav>
      </Content>
    </Container>
  );
}

export default Header;
