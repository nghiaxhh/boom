import PropTypes from 'prop-types'
import React from 'react'
import { ModalWrapper } from './styled'

const ModalCommon = (props) => {
  const { children, title, open, onOk, onCancel, footer, width } = props
  return (
    <ModalWrapper
      {...props}
      title={title ?? ''}
      open={open}
      width={width ?? '800px'}
      onCancel={onCancel}
      onOk={onOk}
      centered
      // style={{ top: '20px' }}
      footer={<div>{footer}</div> || null}
    >
      {children}
    </ModalWrapper>
  )
}

ModalCommon.propTypes = {
  title: PropTypes.node,
  footer: PropTypes.node,
  open: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onOk: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null, undefined]),
  ]),
  onCancel: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null, undefined]),
  ]),
}

// ModalCommon.defaultProps = {
//   onCancel: null,
//   onOk: null,
// }
export default ModalCommon
