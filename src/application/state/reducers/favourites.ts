import { FavouriteAddedEvent } from '../events/favourite-added'
import { FavouriteRemovedEvent } from '../events/favourite-removed'

export type FavouritesEvent = FavouriteAddedEvent | FavouriteRemovedEvent

export type FavouritesState = string[]

export const favourites = (
  state: FavouritesState = [],
  event: FavouritesEvent,
): FavouritesState => {
  switch (event.type) {
    case 'favourite-added':
      return [event.payload.id, ...state.filter((item) => item !== event.payload.id)]
    case 'favourite-removed':
      return state.filter((item) => item !== event.payload.id)
    default:
      return state
  }
}
