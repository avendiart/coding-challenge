import { PropsWithoutRef, ReactElement } from 'react'

export type ActionButtonProps = PropsWithoutRef<JSX.IntrinsicElements['button']> & {
  icon: ReactElement
  size?: 's' | 'm' | 'l'
}

export const ActionButton = ({ icon, size = 'm', ...props }: ActionButtonProps) => (
  <button
    {...props}
    style={{
      boxSizing: 'border-box',
      height: { s: 32, m: 48, l: 64 }[size],
      width: { s: 32, m: 48, l: 64 }[size],
      borderRadius: { s: 16, m: 24, l: 32 }[size],
      padding: { s: 4, m: 8, l: 12 }[size],
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 2,
      display: 'inline-flex',
      alignItems: 'center',
      justifyItems: 'center',
      cursor: 'pointer',
    }}
  >
    {icon}
  </button>
)
