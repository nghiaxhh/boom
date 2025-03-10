import { Button } from 'antd'
import styled from 'styled-components'

export const ButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ disabled, bgColor }) =>
    disabled ? '#b7b0ac' : bgColor ? bgColor : '#FF9C09'} !important;
  font-size: ${({ size }) => (size ? size : 14)}px;

  font-weight: 700;
  /* width: 120px; */
  min-width: 80px;
  color: ${({ disabled, color }) =>
    disabled ? '#000' : color ? color : '#fff'};

  /* box-shadow: ${({ shadow, color }) =>
    color === 'gray'
      ? `inset 6px 5px 13px #e8e8e8`
      : shadow
        ? `inset 6px 5px 13px ${shadow}`
        : 'none'}; */
`
