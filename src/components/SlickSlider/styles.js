import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: block;
  background: #000;

  .slick-arrow {
    display: none !important;
  }

  .slick-dots {
    bottom: 16px;

    li button {
      &:before {
        color: #fff;
        font-size: 12px;
      }
    }
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 830px) {
    padding-top: 90px;
  }
`
