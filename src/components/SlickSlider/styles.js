import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: block;

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
`
