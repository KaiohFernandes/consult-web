import React from 'react';
import { Container } from './styles';

import whatsapp from '../../assets/images/whatsapp.svg';
import megafone from '../../assets/images/megafone.svg';

function About() {
  return (
    <Container id="about">
      <h1>CONHEÇA A <span>CONSULT</span></h1>

      <p>CONSULT é uma plataforma de integração sistemas, voips, discadora e
      bases de dados necessários para sua alta performance no mercado de
      consignado.</p>

      <p className="bold">Disponibilizamos aos nossos clientes e parceiros uma<br />
      plataforma contendo</p>

      <div className="services">
        <ul>
          <li>
            <div className="icon">
              <i className="material-icons">search</i>
            </div>
            <p>Três fontes de consultas</p>
          </li>
          <li>
            <div className="icon">
              <i className="material-icons">dialpad</i>
            </div>
            <p>Discadores</p>
          </li>
          <li>
            <div className="icon">
              <i className="material-icons">insert_chart</i>
            </div>
            <p>Relatórios</p>
          </li>
          <li>
            <div className="icon">
              <i className="material-icons">calendar_today</i>
            </div>
            <p>Agendamentos</p>
          </li>
          <li>
            <div className="icon">
              <i className="material-icons">chat</i>
            </div>
            <p>SMS</p>
          </li>
        </ul>

        <ul>
          <li>
            <div className="icon">
              <img src={whatsapp} alt="whatsapp" title="whatsapp" />
            </div>
            <p>Whatsapp Ilimitado</p>
          </li>
          <li>
            <div className="icon">
              <img src={megafone} alt="Excelentes Campanhas" title="Excelentes Campanhas" />
            </div>
            <p>Leads Cortesia</p>
          </li>
          <li>
            <div className="icon">
              <i className="material-icons">list_all</i>
            </div>
            <p>Extratos</p>
          </li>
          <li>
            <div className="icon">
              <i className="material-icons">people_online</i>
            </div>
            <p>Informações gerais sobre clientes e seus benefícios</p>
          </li>
          <li>
            <div className="icon">
              <i className="material-icons">call</i>
            </div>
            <p>URA reversa</p>
          </li>
        </ul>
      </div>

      <p>E ainda é possivel acompanhar o andamento da proposta.</p>
    </Container>
  )
}

export default About;
