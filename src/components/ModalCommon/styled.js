import { Modal } from 'antd'
import styled from 'styled-components'

export const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    padding: 0;
  }

  .ant-modal-title {
  }

  .ant-form-item-label > label {
    align-items: flex-start !important;
  }

  .ant-modal-header {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    padding: 16px 24px;
    margin: 0;
  }

  .ant-modal-body {
    padding: 24px;
    max-height: calc(100vh - 174px);
    overflow-y: auto;
  }

  .ant-modal-footer {
    padding: 0 24px 16px;
    margin: 0;
  }

  .ant-form-item-label > label {
    color: black;
  }

  .ant-btn-default:disabled {
    background: #ff5400;
    color: #fff;
  }
`
