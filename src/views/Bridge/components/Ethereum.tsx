import React from 'react'
import { Svg, SvgProps } from '@glide-finance/uikit'

const Ethereum: React.FC<SvgProps> = (props) => {
  return (
    // <Svg viewBox="0 0 48 48" {...props}>
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M14.9024 0C10.8947 0 7.87179 3.60289 8.60749 7.50271L10.3484 16.7306C4.45101 19.3061 0 23.7533 0 29.3333V32.7273C0 37.3405 3.08306 41.2029 7.39317 43.8102C11.7369 46.4379 17.6132 48 24 48C30.3868 48 36.2631 46.4379 40.6068 43.8102C44.9169 41.2029 48 37.3405 48 32.7273V29.3333C48 23.7236 43.5028 19.2593 37.5552 16.6889L39.2882 7.50271C40.0239 3.6029 37.001 0 32.9933 0C29.4567 0 26.5896 2.83809 26.5896 6.33904V14.147C25.7386 14.0899 24.8746 14.0606 24 14.0606C23.0897 14.0606 22.1908 14.0923 21.3061 14.1541V6.33904C21.3061 2.83809 18.4391 0 14.9024 0ZM17.8776 28.3637C17.8776 30.372 16.7811 32 15.4286 32C14.0761 32 12.9796 30.372 12.9796 28.3637C12.9796 26.3554 14.0761 24.7273 15.4286 24.7273C16.7811 24.7273 17.8776 26.3554 17.8776 28.3637ZM34.7757 28.3637C34.7757 30.372 33.6792 32 32.3267 32C30.9742 32 29.8777 30.372 29.8777 28.3637C29.8777 26.3554 30.9742 24.7273 32.3267 24.7273C33.6792 24.7273 34.7757 26.3554 34.7757 28.3637Z"
    //     fill="url(#paint0_linear)"
    //   />
    //   <defs>
    //     <linearGradient id="paint0_linear" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
    //       <stop stopColor="#7645D9" />
    //       <stop offset="1" stopColor="#5121B1" />
    //     </linearGradient>
    //   </defs>
    // </Svg>
    <Svg viewBox="0 0 64 64" width="64px">
      <path
        d="M32.096.347v.031c.032.158.032.347.032.536v22.731c-.032.126-.127.158-.221.221-.662.315-1.293.599-1.955.883-.914.41-1.86.851-2.774 1.26l-3.31 1.514c-.915.41-1.83.82-2.712 1.23-1.072.504-2.175.977-3.247 1.482-.915.41-1.829.85-2.775 1.26-.756.347-1.513.663-2.238 1.01-.063.031-.126.063-.19.063-.03 0-.03 0-.062-.032l.851-1.419c1.64-2.711 3.247-5.39 4.887-8.102 1.734-2.9 3.5-5.801 5.233-8.702 1.608-2.68 3.248-5.36 4.855-8.04C29.637 4.32 30.835 2.366 32.001.41c.032-.063.063-.095.063-.158h.032c-.032.032 0 .063 0 .095z"
        fill="#8A92B2"
      />
      <path
        d="M51.452 32.536l.032.032-4.635 2.742-14.565 8.607a.687.687 0 00-.158.095c-.094 0-.094-.095-.094-.126V24.118c0-.094 0-.22.031-.315.032-.126.126-.095.22-.063.41.19.852.378 1.262.567 1.23.568 2.459 1.135 3.688 1.671 1.072.473 2.113.978 3.185 1.45 1.072.473 2.144.978 3.215 1.45.915.41 1.86.852 2.775 1.262.914.41 1.86.851 2.774 1.261.725.315 1.45.662 2.176.977 0 .095.031.127.094.158z"
        fill="#454A75"
      />
      <path
        d="M32.095 63.59c0 .032-.032.063-.032.095h-.031c0-.063-.063-.095-.095-.158-1.955-2.743-3.91-5.517-5.864-8.26-1.986-2.806-4.004-5.643-5.99-8.45-1.923-2.71-3.878-5.453-5.801-8.165-.505-.725-1.01-1.419-1.514-2.144-.031-.063-.063-.094-.126-.189.095 0 .158.063.19.095 2.742 1.608 5.454 3.216 8.197 4.823 3.152 1.86 6.273 3.72 9.426 5.58l1.608.947c.063.063.063.126.063.189v15.196c0 .157 0 .315-.031.441z"
        fill="#8A92B2"
      />
      <path
        d="M12.61 32.599v-.031c1.01-.442 1.987-.915 2.996-1.356 1.292-.6 2.585-1.167 3.878-1.766.977-.441 1.986-.914 2.963-1.355 1.45-.662 2.87-1.293 4.32-1.955.977-.441 1.954-.883 2.963-1.356.694-.315 1.419-.63 2.112-.946.063-.031.158-.063.19-.126.031 0 .031.032 0 .063v20.02c0 .095-.032.19.031.252-.063.095-.126 0-.158-.031a12.045 12.045 0 01-.85-.505c-6.085-3.594-12.202-7.22-18.287-10.813a.69.69 0 00-.157-.095zM51.39 36.32h.03c0 .062-.062.125-.094.188-5.8 8.166-11.602 16.363-17.403 24.528-.599.852-1.23 1.703-1.829 2.554-.031-.031-.031-.063-.031-.094V47.732c1.324-.788 2.617-1.545 3.94-2.333 5.108-3.026 10.216-6.022 15.291-9.048.032.031.064 0 .095-.032z"
        fill="#62688F"
      />
      <path
        d="M32.063 23.771V.631c0-.095-.032-.158.032-.253 6.4 10.625 12.8 21.218 19.168 31.843.063.094.158.22.19.347-.442-.158-.852-.379-1.262-.568-.504-.22-1.04-.473-1.545-.694-.315-.157-.662-.283-.977-.441-.536-.252-1.072-.473-1.608-.725-.315-.126-.63-.284-.946-.442l-2.08-.945c-.347-.158-.694-.316-1.072-.473l-1.514-.662c-.315-.126-.63-.284-.945-.442l-2.081-.945a35.865 35.865 0 00-1.072-.473l-1.514-.662c-.346-.158-.662-.316-1.008-.473a32.09 32.09 0 00-1.829-.82c.095-.032.063-.032.063-.032z"
        fill="#62688F"
      />
    </Svg>
  )
}

export default Ethereum