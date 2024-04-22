import PropTypes from 'prop-types'
import { Wrapper } from './styled'

export const ListIcon = [
  'icon-bell',
  'icon-check',
  'icon-edit',
  'icon-del',
  'icon-message',
  'icon-eye',
  'icon-transfer',
  'icon-filter',
  'icon-revert',
]

export default function IconSvg(props) {
  const { name, onClick, style } = props
  let iconElement

  switch (name) {
    case 'icon-revert':
      iconElement = (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_6_6430)">
            <path
              d="M10.6038 4.66385H9.53014C9.43193 4.66385 9.35157 4.7442 9.35157 4.84242V10.9875C9.35157 11.0455 9.37836 11.0991 9.42523 11.1326L13.115 13.8268C13.1953 13.8848 13.3069 13.8692 13.365 13.7888L14.0034 12.9183C14.0636 12.8357 14.0458 12.7241 13.9654 12.6683L10.7824 10.367V4.84242C10.7824 4.7442 10.702 4.66385 10.6038 4.66385ZM15.5101 6.34242L19.0101 7.19733C19.1217 7.22412 19.231 7.13929 19.231 7.02545L19.2489 3.42054C19.2489 3.27099 19.077 3.18617 18.9609 3.27992L15.4431 6.02769C15.4165 6.04825 15.3963 6.07591 15.3847 6.10747C15.3731 6.13903 15.3707 6.17321 15.3777 6.20609C15.3847 6.23897 15.4008 6.26921 15.4242 6.29332C15.4476 6.31744 15.4774 6.33446 15.5101 6.34242ZM19.2534 13.0634L17.9877 12.6281C17.9436 12.613 17.8953 12.6157 17.8532 12.6358C17.811 12.6558 17.7784 12.6915 17.7623 12.7353C17.7199 12.8491 17.6752 12.9607 17.6284 13.0723C17.231 14.0121 16.6618 14.858 15.9342 15.5835C15.2146 16.3053 14.3618 16.8807 13.423 17.2777C12.4505 17.6888 11.4052 17.8999 10.3493 17.8982C9.28238 17.8982 8.24889 17.6906 7.27568 17.2777C6.33693 16.8807 5.48412 16.3053 4.76452 15.5835C4.03907 14.858 3.46987 14.0121 3.07032 13.0723C2.66143 12.0993 2.45194 11.0541 2.45425 9.99867C2.45425 8.9317 2.66184 7.89599 3.07478 6.92278C3.47211 5.98304 4.0413 5.13706 4.76898 4.41162C5.48858 3.68978 6.34139 3.11442 7.28014 2.71742C8.24889 2.30447 9.28461 2.09688 10.3516 2.09688C11.4185 2.09688 12.452 2.30447 13.4252 2.71742C14.364 3.11442 15.2168 3.68978 15.9364 4.41162C16.1641 4.64153 16.3784 4.88037 16.5748 5.1326L17.9096 4.08795C16.1529 1.84242 13.4185 0.398222 10.3471 0.400454C4.99889 0.402686 0.704249 4.74644 0.75782 10.0969C0.811391 15.3536 5.08595 19.5969 10.3516 19.5969C14.4922 19.5969 18.019 16.9719 19.3627 13.2955C19.3962 13.2018 19.3471 13.0969 19.2534 13.0634Z"
              fill="#2F54EB"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_6430">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.0664062)"
              />
            </clipPath>
          </defs>
        </svg>
      )
      break
    case 'icon-filter':
      iconElement = (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1894 3.00781H2.8105C2.33199 3.00781 2.03316 3.5293 2.27339 3.94531L6.81636 11.668V16.3672C6.81636 16.7129 7.09371 16.9922 7.43746 16.9922H12.5625C12.9062 16.9922 13.1835 16.7129 13.1835 16.3672V11.668L17.7285 3.94531C17.9668 3.5293 17.6679 3.00781 17.1894 3.00781ZM11.7851 15.5859H8.2148V12.5391H11.7871V15.5859H11.7851ZM11.9726 10.9648L11.7871 11.2891H8.21285L8.0273 10.9648L4.15425 4.41406H15.8457L11.9726 10.9648Z"
            fill="#595959"
          />
        </svg>
      )
      break
    case 'icon-transfer':
      iconElement = (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8978 11.7864H2.36436C2.26615 11.7864 2.18579 11.8667 2.18579 11.965V13.3042C2.18579 13.4025 2.26615 13.4828 2.36436 13.4828H15.8733L12.6523 17.5676C12.5608 17.6837 12.6434 17.8578 12.7929 17.8578H14.4112C14.5206 17.8578 14.6233 17.8087 14.6925 17.7217L18.4603 12.9426C18.8286 12.4739 18.4961 11.7864 17.8978 11.7864ZM18.4358 6.51853H4.92686L8.14785 2.43371C8.23936 2.31764 8.15677 2.14353 8.00722 2.14353H6.38892C6.27954 2.14353 6.17686 2.19264 6.10767 2.27969L2.33981 7.05871C1.9715 7.52746 2.30409 8.21496 2.90008 8.21496H18.4358C18.534 8.21496 18.6144 8.1346 18.6144 8.03639V6.6971C18.6144 6.59889 18.534 6.51853 18.4358 6.51853Z"
            fill="#13C2C2"
          />
        </svg>
      )
      break
    case 'icon-close':
      iconElement = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M3.99414 16.4062H16.8066V3.59375H3.99414V16.4062ZM7.19531 7.15039C7.17606 7.12775 7.16371 7.10007 7.15973 7.07062C7.15574 7.04117 7.16029 7.0112 7.17284 6.98426C7.18538 6.95732 7.20539 6.93454 7.2305 6.91864C7.2556 6.90273 7.28474 6.89437 7.31445 6.89453H8.46484C8.55664 6.89453 8.64453 6.93555 8.70508 7.00586L10.4004 9.02734L12.0957 7.00586C12.1543 6.93555 12.2422 6.89453 12.3359 6.89453H13.4863C13.6191 6.89453 13.6914 7.04883 13.6055 7.15039L11.2168 10L13.6055 12.8496C13.6914 12.9512 13.6191 13.1055 13.4863 13.1055H12.3359C12.2441 13.1055 12.1562 13.0645 12.0957 12.9941L10.4004 10.9727L8.70508 12.9941C8.64648 13.0645 8.55859 13.1055 8.46484 13.1055H7.31445C7.18164 13.1055 7.10937 12.9512 7.19531 12.8496L9.58398 10L7.19531 7.15039Z"
            fill="#E6F7FF"
          />
          <path
            d="M17.5879 2.1875H3.21289C2.86719 2.1875 2.58789 2.4668 2.58789 2.8125V17.1875C2.58789 17.5332 2.86719 17.8125 3.21289 17.8125H17.5879C17.9336 17.8125 18.2129 17.5332 18.2129 17.1875V2.8125C18.2129 2.4668 17.9336 2.1875 17.5879 2.1875ZM16.8066 16.4063H3.99414V3.59375H16.8066V16.4063Z"
            fill="#595959"
          />
          <path
            d="M7.31434 13.1055H8.46473C8.55848 13.1055 8.64637 13.0645 8.70497 12.9941L10.4003 10.9727L12.0956 12.9941C12.1561 13.0645 12.244 13.1055 12.3358 13.1055H13.4862C13.619 13.1055 13.6913 12.9512 13.6054 12.8496L11.2167 10L13.6054 7.15039C13.6913 7.04883 13.619 6.89453 13.4862 6.89453H12.3358C12.2421 6.89453 12.1542 6.93555 12.0956 7.00586L10.4003 9.02734L8.70497 7.00586C8.64442 6.93555 8.55653 6.89453 8.46473 6.89453H7.31434C7.18153 6.89453 7.10926 7.04883 7.1952 7.15039L9.58388 10L7.1952 12.8496C7.17595 12.8722 7.1636 12.8999 7.15961 12.9294C7.15563 12.9588 7.16018 12.9888 7.17272 13.0157C7.18527 13.0427 7.20528 13.0655 7.23038 13.0814C7.25548 13.0973 7.28462 13.1056 7.31434 13.1055Z"
            fill="#595959"
          />
        </svg>
      )
      break
    case 'icon-eye':
      iconElement = (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_281_3008)">
            <path
              d="M20.0032 9.42546C17.8871 4.96788 14.6885 2.72457 10.4005 2.72457C6.11034 2.72457 2.91391 4.96787 0.797841 9.4277C0.712965 9.60742 0.668945 9.80371 0.668945 10.0025C0.668945 10.2012 0.712965 10.3975 0.797841 10.5772C2.91391 15.0348 6.11257 17.2781 10.4005 17.2781C14.6907 17.2781 17.8871 15.0348 20.0032 10.575C20.1751 10.2134 20.1751 9.79377 20.0032 9.42546ZM10.4005 15.671C6.80007 15.671 4.16391 13.8451 2.30454 10.0014C4.16391 6.15761 6.80007 4.33171 10.4005 4.33171C14.001 4.33171 16.6371 6.15761 18.4965 10.0014C16.6394 13.8451 14.0032 15.671 10.4005 15.671ZM10.3112 6.07279C8.14159 6.07279 6.38266 7.83171 6.38266 10.0014C6.38266 12.171 8.14159 13.9299 10.3112 13.9299C12.4809 13.9299 14.2398 12.171 14.2398 10.0014C14.2398 7.83171 12.4809 6.07279 10.3112 6.07279ZM10.3112 12.5014C8.92954 12.5014 7.81123 11.3831 7.81123 10.0014C7.81123 8.61966 8.92954 7.50136 10.3112 7.50136C11.6929 7.50136 12.8112 8.61966 12.8112 10.0014C12.8112 11.3831 11.6929 12.5014 10.3112 12.5014Z"
              fill="#13C2C2"
            />
          </g>
          <defs>
            <clipPath id="clip0_281_3008">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.400391)"
              />
            </clipPath>
          </defs>
        </svg>
      )
      break
    case 'icon-check':
      iconElement = (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3298 2.8125H17.7695C17.5508 2.8125 17.3432 2.91295 17.2092 3.08482L8.00612 14.7433L3.59317 9.15179C3.52641 9.06703 3.44132 8.9985 3.34429 8.95133C3.24725 8.90417 3.14079 8.8796 3.0329 8.87946H1.47263C1.32308 8.87946 1.24049 9.05134 1.33201 9.16741L7.44585 16.9129C7.73156 17.2746 8.28067 17.2746 8.56862 16.9129L19.4704 3.09821C19.5619 2.98438 19.4793 2.8125 19.3298 2.8125Z"
            fill="#52C41A"
          />
        </svg>
      )
      break
    case 'icon-message':
      iconElement = (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_56_3463)">
            <path
              d="M11.7621 7.96875C11.2465 7.96875 10.8469 8.3683 10.8469 8.86161C10.8469 9.35491 11.2465 9.75446 11.7621 9.75446C12.2331 9.75446 12.6326 9.35491 12.6326 8.86161C12.6326 8.3683 12.2331 7.96875 11.7621 7.96875ZM5.51208 7.96875C4.99646 7.96875 4.59691 8.3683 4.59691 8.86161C4.59691 9.35491 4.99646 9.75446 5.51208 9.75446C5.98307 9.75446 6.38262 9.35491 6.38262 8.86161C6.38262 8.3683 5.98307 7.96875 5.51208 7.96875Z"
              fill="#595959"
            />
            <path
              d="M18.9266 6.27058C17.8939 4.84902 16.4048 3.82475 14.7079 3.36879V3.37103C14.3262 2.94692 13.8954 2.55629 13.4132 2.20808C9.75922 -0.448171 4.62976 0.362098 1.96235 4.01611C-0.187205 6.98486 -0.0956871 10.9782 2.09628 13.8152L2.11413 16.775C2.11413 16.8465 2.1253 16.9179 2.14762 16.9849C2.17569 17.0743 2.22113 17.1573 2.28133 17.2292C2.34152 17.3011 2.4153 17.3604 2.49843 17.4037C2.58157 17.447 2.67243 17.4736 2.76582 17.4817C2.85922 17.4899 2.9533 17.4796 3.04271 17.4514L5.8686 16.5608C6.61637 16.8264 7.38869 16.9782 8.15655 17.0206L8.14539 17.0295C10.1342 18.4782 12.7414 18.9134 15.132 18.1233L17.969 19.0474C18.0405 19.0697 18.1141 19.0831 18.19 19.0831C18.5851 19.0831 18.9043 18.7639 18.9043 18.3688V15.3777C20.8708 12.7081 20.9222 9.01835 18.9266 6.27058ZM6.1811 14.9759L5.91324 14.8643L3.70342 15.5563L3.6811 13.2349L3.50253 13.034C1.61413 10.7304 1.48913 7.4112 3.25699 4.97594C5.40878 2.02504 9.53378 1.37326 12.4757 3.50272C15.4266 5.64781 16.0807 9.76612 13.949 12.6991C12.161 15.1523 8.96012 16.0585 6.1811 14.9759ZM17.4534 14.5965L17.2749 14.8197L17.2972 17.1411L15.1097 16.4045L14.8418 16.5161C13.5918 16.9804 12.2592 17.0183 11.0248 16.6724L11.0204 16.6701C12.7169 16.1499 14.1988 15.0933 15.2436 13.659C16.949 11.3085 17.2257 8.3554 16.2347 5.83754L16.2481 5.84647C16.7615 6.21478 17.2324 6.6746 17.632 7.2304C19.2525 9.45361 19.161 12.4804 17.4534 14.5965Z"
              fill="#595959"
            />
            <path
              d="M8.63709 7.96875C8.12146 7.96875 7.72191 8.3683 7.72191 8.86161C7.72191 9.35491 8.12146 9.75446 8.63709 9.75446C9.10807 9.75446 9.50762 9.35491 9.50762 8.86161C9.50762 8.3683 9.10807 7.96875 8.63709 7.96875Z"
              fill="#595959"
            />
          </g>
          <defs>
            <clipPath id="clip0_56_3463">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.400146)"
              />
            </clipPath>
          </defs>
        </svg>
      )
      break
    case 'icon-edit':
      iconElement = (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.0332 14.6875C5.07227 14.6875 5.11133 14.6836 5.15039 14.6777L8.43555 14.1016C8.47461 14.0938 8.51172 14.0762 8.53906 14.0469L16.8184 5.76758C16.8365 5.74951 16.8508 5.72805 16.8606 5.70442C16.8704 5.68079 16.8755 5.65546 16.8755 5.62988C16.8755 5.6043 16.8704 5.57897 16.8606 5.55535C16.8508 5.53172 16.8365 5.51026 16.8184 5.49219L13.5723 2.24414C13.5352 2.20703 13.4863 2.1875 13.4336 2.1875C13.3809 2.1875 13.332 2.20703 13.2949 2.24414L5.01562 10.5234C4.98633 10.5527 4.96875 10.5879 4.96094 10.627L4.38477 13.9121C4.36577 14.0167 4.37255 14.1244 4.40454 14.2258C4.43654 14.3273 4.49276 14.4193 4.56836 14.4941C4.69727 14.6191 4.85938 14.6875 5.0332 14.6875ZM6.34961 11.2812L13.4336 4.19922L14.8652 5.63086L7.78125 12.7129L6.04492 13.0195L6.34961 11.2812ZM17.1875 16.3281H2.8125C2.4668 16.3281 2.1875 16.6074 2.1875 16.9531V17.6562C2.1875 17.7422 2.25781 17.8125 2.34375 17.8125H17.6562C17.7422 17.8125 17.8125 17.7422 17.8125 17.6562V16.9531C17.8125 16.6074 17.5332 16.3281 17.1875 16.3281Z"
            fill="#FF7A45"
          />
        </svg>
      )
      break
    case 'icon-del':
      iconElement = (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.03125 3.59375H6.875C6.96094 3.59375 7.03125 3.52344 7.03125 3.4375V3.59375H12.9688V3.4375C12.9688 3.52344 13.0391 3.59375 13.125 3.59375H12.9688V5H14.375V3.4375C14.375 2.74805 13.8145 2.1875 13.125 2.1875H6.875C6.18555 2.1875 5.625 2.74805 5.625 3.4375V5H7.03125V3.59375ZM16.875 5H3.125C2.7793 5 2.5 5.2793 2.5 5.625V6.25C2.5 6.33594 2.57031 6.40625 2.65625 6.40625H3.83594L4.31836 16.6211C4.34961 17.2871 4.90039 17.8125 5.56641 17.8125H14.4336C15.1016 17.8125 15.6504 17.2891 15.6816 16.6211L16.1641 6.40625H17.3438C17.4297 6.40625 17.5 6.33594 17.5 6.25V5.625C17.5 5.2793 17.2207 5 16.875 5ZM14.2832 16.4062H5.7168L5.24414 6.40625H14.7559L14.2832 16.4062Z"
            fill="#FF4D4F"
          />
        </svg>
      )
      break
    case 'icon-comment':
      iconElement = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <g clipPath="url(#clip0_375_1396)">
            <path
              d="M11.7623 7.96875C11.2467 7.96875 10.8472 8.3683 10.8472 8.8616C10.8472 9.35491 11.2467 9.75446 11.7623 9.75446C12.2333 9.75446 12.6329 9.35491 12.6329 8.8616C12.6329 8.3683 12.2333 7.96875 11.7623 7.96875ZM5.51233 7.96875C4.9967 7.96875 4.59715 8.3683 4.59715 8.8616C4.59715 9.35491 4.9967 9.75446 5.51233 9.75446C5.98331 9.75446 6.38286 9.35491 6.38286 8.8616C6.38286 8.3683 5.98331 7.96875 5.51233 7.96875Z"
              fill="#595959"
            />
            <path
              d="M18.9269 6.27058C17.8942 4.84902 16.405 3.82475 14.7081 3.36879V3.37102C14.3264 2.94691 13.8956 2.55629 13.4135 2.20808C9.75947 -0.448174 4.63 0.362094 1.96259 4.01611C-0.186961 6.98486 -0.095443 10.9782 2.09652 13.8152L2.11438 16.775C2.11438 16.8465 2.12554 16.9179 2.14786 16.9849C2.17594 17.0743 2.22137 17.1573 2.28157 17.2292C2.34177 17.3011 2.41554 17.3604 2.49868 17.4037C2.58181 17.447 2.67268 17.4735 2.76607 17.4817C2.85946 17.4899 2.95355 17.4796 3.04295 17.4514L5.86884 16.5608C6.61661 16.8264 7.38893 16.9782 8.15679 17.0206L8.14563 17.0295C10.1345 18.4782 12.7416 18.9134 15.1322 18.1233L17.9693 19.0474C18.0407 19.0697 18.1144 19.0831 18.1903 19.0831C18.5854 19.0831 18.9046 18.7639 18.9046 18.3688V15.3777C20.8711 12.7081 20.9224 9.01834 18.9269 6.27058ZM6.18134 14.9759L5.91349 14.8643L3.70366 15.5563L3.68134 13.2349L3.50277 13.034C1.61438 10.7304 1.48938 7.4112 3.25724 4.97593C5.40902 2.02504 9.53402 1.37325 12.476 3.50272C15.4269 5.64781 16.0809 9.76611 13.9492 12.6991C12.1613 15.1523 8.96036 16.0585 6.18134 14.9759ZM17.4537 14.5965L17.2751 14.8197L17.2974 17.1411L15.1099 16.4045L14.8421 16.5161C13.5921 16.9804 12.2595 17.0183 11.0251 16.6724L11.0206 16.6701C12.7171 16.1499 14.199 15.0933 15.2438 13.659C16.9492 11.3085 17.226 8.3554 16.2349 5.83754L16.2483 5.84647C16.7617 6.21477 17.2327 6.67459 17.6322 7.2304C19.2528 9.45361 19.1613 12.4804 17.4537 14.5965Z"
              fill="#595959"
            />
            <path
              d="M8.63733 7.96875C8.1217 7.96875 7.72215 8.3683 7.72215 8.8616C7.72215 9.35491 8.1217 9.75446 8.63733 9.75446C9.10831 9.75446 9.50786 9.35491 9.50786 8.8616C9.50786 8.3683 9.10831 7.96875 8.63733 7.96875Z"
              fill="#595959"
            />
          </g>
          <defs>
            <clipPath id="clip0_375_1396">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.400391)"
              />
            </clipPath>
          </defs>
        </svg>
      )
      break
    case 'icon-bell':
      iconElement = (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1859 15.7116H16.6501V8.12229C16.6501 4.97273 14.322 2.37005 11.293 1.93702V1.06871C11.293 0.575411 10.8935 0.175858 10.4001 0.175858C9.90684 0.175858 9.50729 0.575411 9.50729 1.06871V1.93702C6.47827 2.37005 4.15015 4.97273 4.15015 8.12229V15.7116H3.61443C3.21934 15.7116 2.90015 16.0308 2.90015 16.4259V17.1401C2.90015 17.2384 2.9805 17.3187 3.07872 17.3187H7.90015C7.90015 18.6982 9.02068 19.8187 10.4001 19.8187C11.7796 19.8187 12.9001 18.6982 12.9001 17.3187H17.7216C17.8198 17.3187 17.9001 17.2384 17.9001 17.1401V16.4259C17.9001 16.0308 17.581 15.7116 17.1859 15.7116ZM10.4001 18.3901C9.80863 18.3901 9.32872 17.9102 9.32872 17.3187H11.4716C11.4716 17.9102 10.9917 18.3901 10.4001 18.3901ZM5.75729 15.7116V8.12229C5.75729 6.88122 6.23943 5.71604 7.11666 4.8388C7.9939 3.96157 9.15908 3.47943 10.4001 3.47943C11.6412 3.47943 12.8064 3.96157 13.6836 4.8388C14.5609 5.71604 15.043 6.88122 15.043 8.12229V15.7116H5.75729Z"
            fill="#13C2C2"
          />
        </svg>
      )
      break
    case 'icon-forward':
      iconElement = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M13.6113 10.3311L6.12695 16.2104C5.84863 16.4291 5.43945 16.2318 5.43945 15.8793V4.12051C5.43945 3.76797 5.84863 3.5709 6.12695 3.78965L13.6113 9.66895C13.6616 9.70828 13.7022 9.75853 13.7301 9.81589C13.758 9.87324 13.7725 9.9362 13.7725 10C13.7725 10.0638 13.758 10.1268 13.7301 10.1841C13.7022 10.2415 13.6616 10.2917 13.6113 10.3311ZM13.9551 16.875H15.2051C15.2465 16.875 15.2863 16.8585 15.3156 16.8292C15.3449 16.7999 15.3613 16.7602 15.3613 16.7188V3.28125C15.3613 3.23981 15.3449 3.20007 15.3156 3.17076C15.2863 3.14146 15.2465 3.125 15.2051 3.125H13.9551C13.9136 3.125 13.8739 3.14146 13.8446 3.17076C13.8153 3.20007 13.7988 3.23981 13.7988 3.28125V16.7188C13.7988 16.7602 13.8153 16.7999 13.8446 16.8292C13.8739 16.8585 13.9136 16.875 13.9551 16.875Z"
            fill="black"
            fill-opacity="0.85"
          />
        </svg>
      )
      break
    case 'icon-check1':
      iconElement = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M10.4004 1.25C5.56836 1.25 1.65039 5.16797 1.65039 10C1.65039 14.832 5.56836 18.75 10.4004 18.75C15.2324 18.75 19.1504 14.832 19.1504 10C19.1504 5.16797 15.2324 1.25 10.4004 1.25ZM10.4004 17.2656C6.38867 17.2656 3.13477 14.0117 3.13477 10C3.13477 5.98828 6.38867 2.73438 10.4004 2.73438C14.4121 2.73438 17.666 5.98828 17.666 10C17.666 14.0117 14.4121 17.2656 10.4004 17.2656Z"
            fill="#595959"
          />
          <path
            d="M10.4004 2.73438C6.38867 2.73438 3.13477 5.98828 3.13477 10C3.13477 14.0117 6.38867 17.2656 10.4004 17.2656C14.4121 17.2656 17.666 14.0117 17.666 10C17.666 5.98828 14.4121 2.73438 10.4004 2.73438ZM14.1777 7.14258L10.0645 12.8457C10.007 12.9259 9.93118 12.9913 9.84337 13.0364C9.75557 13.0815 9.65828 13.1051 9.55957 13.1051C9.46086 13.1051 9.36357 13.0815 9.27577 13.0364C9.18797 12.9913 9.11218 12.9259 9.05469 12.8457L6.62109 9.4707C6.54688 9.36719 6.62109 9.22266 6.74805 9.22266H7.66406C7.86523 9.22266 8.05273 9.32031 8.16992 9.48242L9.56055 11.4121L12.6309 7.1543C12.748 6.99023 12.9375 6.89453 13.1367 6.89453H14.0527C14.1797 6.89453 14.2539 7.03906 14.1777 7.14258Z"
            fill="#E6F7FF"
          />
          <path
            d="M14.053 6.89453H13.137C12.9378 6.89453 12.7483 6.99023 12.6311 7.1543L9.5608 11.4121L8.17017 9.48242C8.05298 9.32031 7.86548 9.22266 7.66431 9.22266H6.74829C6.62134 9.22266 6.54712 9.36719 6.62134 9.4707L9.05494 12.8457C9.11243 12.9259 9.18822 12.9913 9.27602 13.0364C9.36382 13.0815 9.46111 13.1051 9.55982 13.1051C9.65853 13.1051 9.75582 13.0815 9.84363 13.0364C9.93143 12.9913 10.0072 12.9259 10.0647 12.8457L14.178 7.14258C14.2542 7.03906 14.18 6.89453 14.053 6.89453Z"
            fill="#1890FF"
          />
        </svg>
      )
      break
    case 'icon-success':
      iconElement = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="101"
          viewBox="0 0 100 101"
          fill="none"
        >
          <path
            d="M37.5 50.5L45.8333 58.8333L62.5 42.1667M87.5 50.5C87.5 71.2107 70.7107 88 50 88C29.2893 88 12.5 71.2107 12.5 50.5C12.5 29.7893 29.2893 13 50 13C70.7107 13 87.5 29.7893 87.5 50.5Z"
            stroke="#34A853"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
  name: PropTypes.oneOf(ListIcon).isRequired,
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null, undefined]),
  ]),
}

IconSvg.defaultProps = {
  onClick: null,
}
