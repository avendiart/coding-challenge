import { PropsWithRef } from 'react'

export type TextProps = PropsWithRef<JSX.IntrinsicElements['p']> & {
  size?: 's' | 'm' | 'l'
}

export const Text = ({ size = 'm', ...props }: TextProps) => (
  <p
    {...props}
    style={{
      margin: 0,
      padding: 0,
      fontSize: { s: '12px', m: '16px', l: '20px' }[size],
      lineHeight: { s: '16px', m: '24px', l: '32px' }[size],
    }}
  />
)
