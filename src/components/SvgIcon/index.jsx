import PropTypes from 'prop-types'
import { Wrapper } from './styled'
import React from 'react'

export const ListIcon = [
  'icon-image',
  'icon-pencil',
  'icon-x',
  'icon-discord',
  'icon-gmail',
  'icon-flash-fill',
]

export default function IconSvg(props) {
  const { name, onClick, style } = props
  let iconElement

  switch (name) {
    case 'icon-flash-fill':
      iconElement = (
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_199_872)">
            <path
              d="M2.818 3.81799L6 0.635986L9.182 3.81799C9.81133 4.44732 10.2399 5.24915 10.4135 6.12206C10.5872 6.99497 10.4981 7.89977 10.1575 8.72204C9.81686 9.5443 9.24008 10.2471 8.50006 10.7416C7.76004 11.236 6.89002 11.4999 6 11.4999C5.10999 11.4999 4.23996 11.236 3.49994 10.7416C2.75992 10.2471 2.18315 9.5443 1.84255 8.72204C1.50195 7.89977 1.41284 6.99497 1.58646 6.12206C1.76009 5.24915 2.18867 4.44732 2.818 3.81799ZM6.5 5.99999V3.74999L4.25 6.99999H5.5V9.24999L7.75 5.99999H6.5Z"
              fill="#0C111D"
            />
          </g>
          <defs>
            <clipPath id="clip0_199_872">
              <rect
                width="12"
                height="12"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      )
      break
    case 'icon-gmail':
      iconElement = (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="47" height="47" rx="9.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="47"
            height="47"
            rx="9.5"
            stroke="#DCDCDC"
          />
          <path
            d="M34 16H14V32H34V16ZM32 20L24 25L16 20V18L24 23L32 18V20Z"
            fill="url(#paint0_linear_82_285)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_82_285"
              x1="13.1837"
              y1="22.4416"
              x2="32.3209"
              y2="29.6837"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9C09" />
              <stop offset="1" stopColor="#FF7D35" />
            </linearGradient>
          </defs>
        </svg>
      )
      break
    case 'icon-discord':
      iconElement = (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="47" height="47" rx="9.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="47"
            height="47"
            rx="9.5"
            stroke="#DCDCDC"
          />
          <path
            d="M31.952 17.6721C30.048 16.1411 27.036 15.8821 26.908 15.8711C26.707 15.8541 26.516 15.9681 26.434 16.1521C26.428 16.1641 26.362 16.3151 26.289 16.5501C27.548 16.7621 29.095 17.1901 30.495 18.0591C30.719 18.1981 30.788 18.4931 30.649 18.7181C30.559 18.8641 30.402 18.9441 30.242 18.9441C30.156 18.9441 30.069 18.9211 29.99 18.8721C27.584 17.3801 24.578 17.3051 24 17.3051C23.422 17.3051 20.415 17.3801 18.011 18.8721C17.786 19.0121 17.492 18.9421 17.352 18.7181C17.212 18.4931 17.282 18.1991 17.506 18.0591C18.906 17.1911 20.452 16.7621 21.712 16.5501C21.638 16.3141 21.572 16.1641 21.567 16.1521C21.484 15.9681 21.294 15.8521 21.092 15.8721C20.965 15.8821 17.953 16.1411 16.023 17.6941C15.015 18.6251 13 24.0731 13 28.7831C13 28.8661 13.022 28.9481 13.063 29.0201C14.454 31.4631 18.248 32.1031 19.113 32.1311C19.118 32.1311 19.123 32.1311 19.128 32.1311C19.281 32.1311 19.425 32.0581 19.515 31.9341L20.39 30.7321C18.031 30.1221 16.826 29.0871 16.756 29.0261C16.558 28.8511 16.539 28.5491 16.714 28.3511C16.889 28.1531 17.19 28.1341 17.388 28.3081C17.417 28.3341 19.636 30.2171 24 30.2171C28.372 30.2171 30.591 28.3261 30.613 28.3071C30.811 28.1351 31.113 28.1531 31.287 28.3521C31.461 28.5501 31.442 28.8511 31.245 29.0251C31.175 29.0871 29.97 30.1211 27.611 30.7311L28.486 31.9331C28.576 32.0571 28.72 32.1301 28.873 32.1301C28.878 32.1301 28.883 32.1301 28.888 32.1301C29.753 32.1031 33.547 31.4631 34.938 29.0191C34.978 28.9471 35 28.8661 35 28.7831C35 24.0731 32.985 18.6251 31.952 17.6721ZM20.891 26.8701C19.967 26.8701 19.217 26.0131 19.217 24.9571C19.217 23.9011 19.966 23.0441 20.891 23.0441C21.816 23.0441 22.565 23.9011 22.565 24.9571C22.565 26.0131 21.816 26.8701 20.891 26.8701ZM27.109 26.8701C26.185 26.8701 25.435 26.0131 25.435 24.9571C25.435 23.9011 26.184 23.0441 27.109 23.0441C28.033 23.0441 28.783 23.9011 28.783 24.9571C28.783 26.0131 28.033 26.8701 27.109 26.8701Z"
            fill="url(#paint0_linear_82_282)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_82_282"
              x1="12.102"
              y1="22.4163"
              x2="32.7106"
              y2="30.8571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9C09" />
              <stop offset="1" stopColor="#FF7D35" />
            </linearGradient>
          </defs>
        </svg>
      )
      break
    case 'icon-x':
      iconElement = (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="47" height="47" rx="9.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="47"
            height="47"
            rx="9.5"
            stroke="#DCDCDC"
          />
          <path
            d="M14.8672 15L21.7363 24.8184L14.7344 33H17.3809L22.9199 26.5098L27.4609 33H33.3711L26.1738 22.6973L32.7441 15H30.1387L24.9961 21.0098L20.7988 15H14.8672Z"
            fill="url(#paint0_linear_82_286)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_82_286"
              x1="13.9737"
              y1="22.2468"
              x2="32.5364"
              y2="28.0654"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9C09" />
              <stop offset="0.51" stopColor="#FF7D35" />
            </linearGradient>
          </defs>
        </svg>
      )
      break

    case 'icon-pencil':
      iconElement = (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0833 7.43758L12.5417 3.93758L13.7083 2.77091C14.0278 2.45147 14.4203 2.29175 14.8858 2.29175C15.3508 2.29175 15.7431 2.45147 16.0625 2.77091L17.2292 3.93758C17.5486 4.25703 17.7153 4.64258 17.7292 5.09425C17.7431 5.54536 17.5903 5.93064 17.2708 6.25008L16.0833 7.43758ZM14.875 8.66675L6.04167 17.5001H2.5V13.9584L11.3333 5.12508L14.875 8.66675Z"
            fill="#595959"
          />
        </svg>
      )
      break
    case 'icon-image':
      iconElement = (
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.75 6.25H4.25C3.55859 6.25 3 6.80859 3 7.5V32.5C3 33.1914 3.55859 33.75 4.25 33.75H36.75C37.4414 33.75 38 33.1914 38 32.5V7.5C38 6.80859 37.4414 6.25 36.75 6.25ZM35.1875 30.9375H5.8125V29.3789L11.2227 22.9609L17.0859 29.9141L26.207 19.1016L35.1875 29.75V30.9375ZM35.1875 25.8672L26.4453 15.5C26.3203 15.3516 26.0938 15.3516 25.9688 15.5L17.0859 26.0313L11.4609 19.3633C11.3359 19.2148 11.1094 19.2148 10.9844 19.3633L5.8125 25.4961V9.0625H35.1875V25.8672Z"
            fill="white"
          />
          <path
            d="M12.375 17.8125C12.8264 17.8125 13.2734 17.7236 13.6905 17.5508C14.1075 17.3781 14.4865 17.1249 14.8057 16.8057C15.1249 16.4865 15.3781 16.1075 15.5508 15.6905C15.7236 15.2734 15.8125 14.8264 15.8125 14.375C15.8125 13.9236 15.7236 13.4766 15.5508 13.0595C15.3781 12.6425 15.1249 12.2635 14.8057 11.9443C14.4865 11.6251 14.1075 11.3719 13.6905 11.1992C13.2734 11.0264 12.8264 10.9375 12.375 10.9375C11.4633 10.9375 10.589 11.2997 9.94432 11.9443C9.29966 12.589 8.9375 13.4633 8.9375 14.375C8.9375 15.2867 9.29966 16.161 9.94432 16.8057C10.589 17.4503 11.4633 17.8125 12.375 17.8125ZM12.375 13.2813C12.9805 13.2813 13.4688 13.7695 13.4688 14.375C13.4688 14.9805 12.9805 15.4688 12.375 15.4688C11.7695 15.4688 11.2812 14.9805 11.2812 14.375C11.2812 13.7695 11.7695 13.2813 12.375 13.2813Z"
            fill="white"
          />
        </svg>
      )
      break

    default:
      break
  }

  if (iconElement == null) {
    return null
  }
  return (
    <Wrapper style={style} onClick={onClick}>
      {iconElement}
    </Wrapper>
  )
}

IconSvg.propTypes = {
  style: PropTypes.object,
  name: PropTypes.oneOf(ListIcon).isRequired,
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null, undefined]),
  ]),
}

IconSvg.defaultProps = {
  onClick: null,
}
