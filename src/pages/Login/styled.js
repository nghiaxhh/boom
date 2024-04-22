import styled from 'styled-components'

export const LoginFormWrapper = styled.div`
  width: 751px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 86px 88px 56px;

  .ant-form-vertical .ant-form-item-label > label {
    font-size: 24px;
    line-height: 32px;
    color: #666666;
    font-weight: 400;
  }
`

export const AuthenticationWrapper = styled.div`
  width: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo-app {
    display: flex;
    justify-content: center;
    margin-bottom: 55px;
  }

  .btn-back {
    width: 100%;
    color: #040308;
    font-size: 16px;
    font-weight: 600;
  }

  .text-welcome {
    color: #666666;
    font-style: normal;
    line-height: normal;
    font-size: 24px;
    padding-bottom: 40px;
    text-align: center;
  }

  .btn-login {
    width: 100%;
    border-radius: 10px;
    background: #ff5400;
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 10px;
    height: 73px;
  }

  .btn-sign-up,
  .btn-forgot {
    color: #ff5400;
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .btn-forgot {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
  }
`
