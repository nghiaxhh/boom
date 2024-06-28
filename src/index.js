import { ConfigProvider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { StyleProvider } from '@ant-design/cssinjs'
import reportWebVitals from './reportWebVitals'
import './styles/index.css'
import { store } from './store/store'
import { MetaMaskProvider } from '@metamask/sdk-react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          controlHeight: 40,
          borderRadius: 6,
        },
        hashed: false,
        components: {
          Button: {
            // colorBorder: '#FF9C09',
            colorPrimaryHover: 'FF9C09',
          },
        },
      }}
    >
      <StyleProvider layer>
        <MetaMaskProvider
          debug={false}
          sdkOptions={{
            logging: {
              developerMode: false,
            },
            checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
            dappMetadata: {
              name: 'Boom Arena',
              url: window.location.host,
            },
            i18nOptions: {
              enabled: true,
            },
            i18nInstance: 'jp',
          }}
        >
          <App />
        </MetaMaskProvider>
      </StyleProvider>
    </ConfigProvider>
  </Provider>
  // </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
