import styled from 'styled-components'

export const LayoutCommon = styled.div`
  max-width: 1200px;
  margin: 0 auto;

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

export const SidebarWrapper = styled.div`
  height: 100vh;
  .ant-menu-item.ant-menu-item-selected {
    font-weight: bold;
    color: #ff5400;
    border-right: 2px solid #ff5400;
    background: rgba(89, 119, 137, 0.1);
  }

  .ant-menu-light .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: #ff5400;
  }

  .ant-menu-submenu-title {
    margin-inline: 0;
  }

  .ant-menu-item {
    border-radius: 0;
    margin: 0;
    width: 100%;
  }

  .active-link {
    font-weight: bold;
    color: #ff5400;
    /* background: rgba(91, 212, 193, 0.1); */
  }

  .inactive-link {
    color: inherit !important;
  }
`

export const NavbarWrapper = styled.div`
  background-color: #fff;
  .admin {
    display: flex;
    padding: 10px 24px;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
  }

  .text-header {
    display: flex;
    align-items: center;
    gap: 16px;
    color: #597789;
    padding: 10px 24px;

    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    border-top: 1px solid #e6ebf1;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
  }

  .sub-title {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #597789;
  }

  .sub-title::before {
    content: '';
    display: inline-block;
    height: 4px;
    width: 4px;
    border-radius: 4px;
    background-color: #597789;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 10px;
  }
`
