import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { favourites } from './reducers/favourites'

export const store = createStore(
  combineReducers({
    favourites,
  }),
)

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
