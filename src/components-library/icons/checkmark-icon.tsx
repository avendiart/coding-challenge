import { PropsWithRef } from 'react'

export const CheckmarkIcon = (props: PropsWithRef<JSX.IntrinsicElements['svg']>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    style={{
      height: '100%',
      width: '100%',
      ...props.style,
    }}
  >
    <path d="M19.071 7.172a1 1 0 0 1 0 1.414l-8.485 8.485a.995.995 0 0 1-.53.277l-.118.014H9.82a.996.996 0 0 1-.648-.29l-4.243-4.244a1 1 0 1 1 1.414-1.414l3.535 3.536 7.779-7.778a1 1 0 0 1 1.414 0z" />
  </svg>
)
