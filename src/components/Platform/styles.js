import styled from 'styled-components';
import background from './background.jpeg';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  text-align: center;
  background: url(${background}) no-repeat center 0;
  background-size: cover;
  padding: 80px 0;

  @media (max-width: 1000px) {
    padding-top: 32px;
  }

  .link {
    margin-top: 108px;
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: 800;
    color: #60A33D;
    background: #fff;
    padding: 16px 32px;
    text-decoration: none;
    max-width: 408px;
    align-self: center;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
      background: #60A33D;
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 820px;
  text-align: left;
  align-self: center;

  @media (max-width: 1000px) {
    display: block;
    width: 100%;
    padding: 0 16px;
    text-align: center;
  }
`;

export const Left = styled.div`
  width: 433px;
  margin-top: 32px;
  border-right: 1px solid #FFFFFF;
  padding-right: 16px;
  padding-bottom: 40px;

  h2 {
    font-size: 26px;
    font-family: 'Roboto';
    font-weight: 800;
    color: #FFFFFF;
    margin-bottom: 4px;
  }

  h3 {
    font-size: 21px;
    font-family: 'Roboto';
    font-weight: 700;
    color: #FFFFFF;
  }

  p {
    font-size: 14px;
    line-height: 26px;
    font-family: 'Roboto';
    font-weight: 300;
    color: #FFFFFF;
    margin-top: 32px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #FFFFFF;
    padding-bottom: 16px;

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 18px;
    }

    p {
      line-height: 20px;
      margin-top: 16px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  padding-left: 32px;
  margin-top: 32px;

  ul {
    padding: 0;
    margin: 0;

    li {
      font-size: 18px;
      font-family: 'Roboto';
      font-weight: 400;
      color: #FFFFFF;
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 1000px) {
    justify-content: center;
    padding: 0;
    text-align: left;
  }
`;
