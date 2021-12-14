import 'modern-normalize'
import { Provider } from 'react-redux'
import useMedia from 'use-media'
import { store } from './state/store'

export const Application = () => {
  const isTablet = useMedia('(min-width: 768px)')
  const isDesktop = useMedia('(min-width: 1280px)')

  return (
    <Provider store={store}>
      <div
        style={{
          padding: 16,
          display: 'flex',
          justifyContent: 'stretch',
          flexDirection: 'column',
          gap: 16,
        }}
      ></div>
    </Provider>
  )
}
