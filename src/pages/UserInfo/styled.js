import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
  padding-top: 24px;

  .ant-divider-horizontal {
    margin: 0;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .ant-upload {
    width: 100%;
  }

  .cover-image {
    cursor: pointer;
    width: 100%;
    height: 200px;
    background: url('./image/upload_cover_image.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    flex-direction: column;
    justify-content: center;
  }
`
