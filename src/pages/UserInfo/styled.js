import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
  padding-top: 24px;
  .flex {
    display: flex;
    align-items: center;
  }

  .ant-divider-horizontal {
    margin: 0;
    color: #d9d9d9;
  }

  .abc {
    cursor: pointer;
    width: 890px;
    height: 200px;
    background: url('./image/upload_cover_image.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 22px;
  }
`
