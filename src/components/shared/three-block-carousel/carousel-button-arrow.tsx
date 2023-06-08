const CarouselButtonIcon = ({ left = false, onClick = (f: any) => f }) => (
  <svg
    onClick={onClick}
    width='50'
    height='50'
    viewBox='0 0 50 50'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    {left ? (
      <>
        <rect width='50' height='50' rx='25' fill='url(#paint0_linear_0_206)' />
        <g clip-path='url(#clip0_0_206)'>
          <path
            d='M18.0848 24.5001C18.0848 24.1596 18.2148 23.8191 18.4743 23.5595L26.644 15.3899C27.1637 14.8702 28.0063 14.8702 28.5257 15.3899C29.0452 15.9094 29.0452 16.7518 28.5257 17.2715L21.2968 24.5001L28.5255 31.7287C29.045 32.2483 29.045 33.0907 28.5255 33.6101C28.006 34.1301 27.1634 34.1301 26.6437 33.6101L18.4741 25.4407C18.2145 25.1809 18.0848 24.8405 18.0848 24.5001Z'
            fill='white'
          />
        </g>
        <defs>
          <linearGradient
            id='paint0_linear_0_206'
            x1='25'
            y1='0'
            x2='25'
            y2='50'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#0D4C93' />
            <stop offset='1' stop-color='#00C9C9' />
          </linearGradient>
          <clipPath id='clip0_0_206'>
            <rect
              width='19'
              height='19'
              fill='white'
              transform='translate(33 15) rotate(90)'
            />
          </clipPath>
        </defs>
      </>
    ) : (
      <>
        <rect width='50' height='50' rx='25' fill='url(#paint0_linear_0_1)' />
        <g clip-path='url(#clip0_0_1)'>
          <path
            d='M30.9152 24.5001C30.9152 24.1596 30.7852 23.8191 30.5257 23.5595L22.356 15.3899C21.8363 14.8702 20.9937 14.8702 20.4743 15.3899C19.9548 15.9094 19.9548 16.7518 20.4743 17.2715L27.7032 24.5001L20.4745 31.7287C19.955 32.2483 19.955 33.0907 20.4745 33.6101C20.994 34.1301 21.8366 34.1301 22.3563 33.6101L30.5259 25.4407C30.7855 25.1809 30.9152 24.8405 30.9152 24.5001Z'
            fill='white'
          />
        </g>
        <defs>
          <linearGradient
            id='paint0_linear_0_1'
            x1='25'
            y1='0'
            x2='25'
            y2='50'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#0D4C93' />
            <stop offset='1' stop-color='#00C9C9' />
          </linearGradient>
          <clipPath id='clip0_0_1'>
            <rect
              width='19'
              height='19'
              fill='white'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 16 15)'
            />
          </clipPath>
        </defs>
      </>
    )}
  </svg>
);

export default CarouselButtonIcon;
