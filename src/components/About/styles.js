import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  text-align: center;

  h1 {
    font-family: 'Roboto';
    color: #222;
    font-size: 60px;
    font-weight: 500;
    margin-bottom: 36px;

    span {
      color: #60A33D;
      font-weight: 800;
    }
  }

  & > p {
    font-size: 24px;
    color: #222;
    font-family: 'Roboto';
    font-weight: 300;

    &.bold {
      margin-top: 36px;
      font-weight: 700;
    }

    &:last-child {
      margin-top: 40px;
    }
  }

  div.services {
    width: 1000px;
    display: flex;
    margin: 40px 0 0 0;
  }

  ul {
    width: 50%;
    padding: 0;
    display: flex;
    flex-direction: column;

    li {
      list-style: none;
      margin-top: 8px;
      display: flex;
      align-items: center;

      .icon {
        background: #222;
        min-width: 90px;
        min-height: 90px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        i {
          color: #60A33D;
          font-size: 52px;
          max-width: 52px;
        }

        img {
          color: #60A33D;
          width: 52px;
        }
      }

      p {
        text-align: left;
        width: 400px;
        padding-left: 16px;
        font-size: 20px;
        color: #222;
        font-family: 'Roboto';
        font-weight: 300;
      }
    }
  }

  @media (max-width: 1000px) {

    h1 {
      font-size: 32px;
    }

    & > p {
      font-size: 18px;

      &.bold {
        margin-top: 16px;
      }
    }

    div.services {
      width: 100%;
      padding: 0 16px;
    }

    ul {
      width: 50%;

      li {
        overflow: hidden;

        p {
          font-size: 18px;
        }
      }
    }
  }
`;
