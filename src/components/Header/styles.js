import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: rgba(0, 0, 0, 0.8);
  box-shadow: 2px 2px 4px rgba(0, 8, 38, 0.16)
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  width: 1024px;
  height: 90px;

  img {
    height: 72px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;

  ul {
    display: flex;
    margin: 0 15px 0 0;
    padding: 0;

    li {
      margin: 0;
      padding: 0 0 0 15px;
      list-style: none;

      a {
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        text-decoration: none;

        padding-bottom: 8px;
        border-bottom: 2px solid transparent;

        transition: all 0.3s ease-in-out;

        &:hover {
          border-color: #60A33D;
        }
      }
    }
  }

  .open-system {
    width: 168px;
    height: 36px;
    text-align: center;
    padding-top: 9px;

    background: #60A33D;
    border: solid 1px #60A33D;
    border-radius: 4px;

    font-family: 'Roboto';
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    transition: all 0.3s ease-in-out;

    &:hover {
      background: none;
      color: #60A33D;
    }
  }
`;
