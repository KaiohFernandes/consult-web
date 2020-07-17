import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: block;
  position: relative;
  text-align: center;
  margin-top: 80px;

  .slick-arrow {
    display: none !important;
  }

  .slick-dots {
    bottom: 16px;

    li button {
      &:before {
        color: #222;
        font-size: 12px;
      }
    }
  }

  img {
    max-width: 100%;
  }

  & > h1 {
    margin-bottom: 40px;
  }

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    display: block;
    transform: skew(0deg, -2.2deg);
    width: 100%;
    height: 100%;
    top: 30px;
    background: rgba(96, 163, 61, 0.6);
  }

  &:after {
    content: "";
    z-index: -2;
    position: absolute;
    display: block;
    transform: skew(0deg, -2.2deg);
    width: 100%;
    height: 100%;
    top: 50px;
    background: rgba(96, 163, 61, 0.6);
  }

  @media (max-width: 1000px) {
    margin-top: 16px;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #EDEDED;
`;

export const ItemImage = styled.div`
  width: 45%;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ItemDescription = styled.div`
  width: auto;
  text-align: left;
  padding-top: 32px;
  padding-left: 40px;

  a {
    font-size: 24px;
    font-weight: 800;
    text-decoration: none;
    font-family: 'Roboto';
    color: #60A33D;
  }

  p {
    margin-top: 32px;
    max-width: 450px;
    width: 100%;
    font-size: 20px;
    font-family: 'Roboto';
    font-weight: 300;
    line-height: 32px;
    text-decoration: none;
    color: #222;
  }

  @media (max-width: 1000px) {
    a {
      font-size: 18px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 767px) {
    a {
      font-size: 18px;
    }

    p {
      max-width: 200px;
      margin-top: 8px;
      font-size: 12px;
      line-height: 14px;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 32px 16px 54px 16px;

    p {
      max-width: 100%;
    }
  }

`;
