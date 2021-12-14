import { PropsWithRef } from 'react'

export const BookmarkIcon = (props: PropsWithRef<JSX.IntrinsicElements['svg']>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    style={{
      height: '100%',
      width: '100%',
      ...props.style,
    }}
  >
    <path d="M17 3H7.00003C5.90003 3 5.01003 3.9 5.01003 5L5.00098 19.4824C5.00053 20.2006 5.73478 20.6851 6.3949 20.4022L12 18L17.6061 20.4026C18.266 20.6854 19 20.2014 19 19.4835V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7.00003 18V5H17V18Z" />
  </svg>
)
