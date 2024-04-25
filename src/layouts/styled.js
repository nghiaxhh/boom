import styled from 'styled-components'

export const LayoutCommon = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  .main-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    .main-title {
      font-weight: 700;
      font-size: 36px;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`
