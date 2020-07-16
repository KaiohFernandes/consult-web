import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 80px 0;

  @media (max-width: 1000px) {
    margin-top: 40px;
  }
`;

export const Items = styled.div`
  display: flex;
  width: 1000px;
  align-self: center;
  margin-top: 40px;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 16px;
    display: block;
  }
`;

export const Item = styled.div`
  width: 330px;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }

  div {
    width: 100%;
    background: #eee;
    border-radius: 4px;

    border: ${props => props.active ? '1px solid #60A33D' : '1px solid transparent'};
    box-shadow: ${props => props.active ? '0 4px 4px rgba(0, 0, 0, 0.25)' : 'none'};

    h2 {
      font-size: 18px;
      font-weight: 800;
      padding-top: 16px;
      color: #60A33D;
    }

    h3 {
      font-size: 18px;
      font-weight: 500;
      color: #222222;
    }

    ul {
      padding: 0;
      margin: 32px 0 0 0;
      padding: 0 16px;
      box-sizing: border-box;

      li {
        list-style: none;
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: 300;
        color: #222;
        border-bottom: 1px solid #ccc;
        padding-bottom: 8px;
        margin-bottom: 8px;

        &:last-child {
          border: none;
        }

        span {
          color: #60A33D;
        }
      }
    }

    .item-price {
      font-size: 24px;
      font-family: 'Roboto';
      font-weight: 800px;
      color: #60A33D;
      padding: 16px 0;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
