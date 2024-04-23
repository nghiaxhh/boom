import styled from 'styled-components'

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .ant-checkbox .ant-checkbox-inner {
    border-radius: 3px;
    height: 16px;
    width: 16px;
  }

  .ant-form-item-label > label {
    font-weight: 700;
    font-size: 16px;
  }
`

export const AuthenticationWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
