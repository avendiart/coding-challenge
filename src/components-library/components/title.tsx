import { PropsWithRef } from 'react'

export type TitleProps = PropsWithRef<JSX.IntrinsicElements['h5']> & {
  size?: 's' | 'm' | 'l'
}

export const Title = ({ size = 'm', ...props }: TitleProps) => (
  <h5
    {...props}
    style={{
      margin: 0,
      padding: 0,
      fontSize: { s: '12px', m: '16px', l: '20px' }[size],
      lineHeight: { s: '16px', m: '24px', l: '32px' }[size],
    }}
  />
)
