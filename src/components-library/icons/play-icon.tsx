import { PropsWithRef } from 'react'

export const PlayIcon = (props: PropsWithRef<JSX.IntrinsicElements['svg']>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    style={{
      height: '100%',
      width: '100%',
      ...props.style,
    }}
  >
    <path d="M6,5.78956442 L6,18.2104356 C6,18.7627203 6.44771525,19.2104356 7,19.2104356 C7.18505978,19.2104356 7.36648973,19.1590832 7.52409743,19.0620939 L17.6160552,12.8516583 C18.0864131,12.5622073 18.2330671,11.9462605 17.9436161,11.4759026 C17.8615728,11.3425821 17.7493757,11.230385 17.6160552,11.1483417 L7.52409743,4.93790611 C7.05373953,4.64845509 6.4377927,4.7951091 6.14834168,5.265467 C6.05135233,5.4230747 6,5.60450465 6,5.78956442 Z" />
  </svg>
)
