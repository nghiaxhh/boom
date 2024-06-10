import React from 'react'
import { ButtonStyled } from './styled'
import PropTypes from 'prop-types'

const Button = React.memo((props) => {
  const { onClick, children } = props
  return (
    <ButtonStyled onClick={onClick} {...props}>
      <div className="flex items-center">{children}</div>
    </ButtonStyled>
  )
})

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null, undefined]),
  ]),
}

// Button.defaultProps = {
//   onClick: null,
// }

export default Button
