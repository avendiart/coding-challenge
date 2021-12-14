import { ReactElement, useMemo } from 'react'
import { Slider } from './slider'
import { Title } from './title'

export type LaneProps = {
  title: string
  size: 's' | 'm' | 'l'
  items: (config: { size: 's' | 'm' | 'l' }) => Array<ReactElement>
}

export const Lane = ({ title, size, items }: LaneProps) => {
  const _items = useMemo(() => items({ size }), [size, items])
  if (_items.length === 0) {
    return null
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'stretch',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <Title size="l">{title}</Title>
      <div
        style={{
          flex: 1,
        }}
      >
        <Slider size={size}>{_items}</Slider>
      </div>
    </div>
  )
}
