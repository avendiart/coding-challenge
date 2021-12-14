export type Show = {
  id: string
  title: string
  description: string
  images: {
    x1: string
    x2: string
  }
}

const shows: Show[] = [
  {
    id: '1',
    title: 'Show Title 1',
    description: 'Show Description 1',
    images: {
      x1: 'https://via.placeholder.com/800x450/000/FFF?text=Show%201',
      x2: 'https://via.placeholder.com/1600x900/000/FFF?text=Show%201',
    },
  },
  {
    id: '2',
    title: 'Show Title 2',
    description: 'Show Description 2',
    images: {
      x1: 'https://via.placeholder.com/800x450/000/FFF?text=Show%202',
      x2: 'https://via.placeholder.com/1600x900/000/FFF?text=Show%202',
    },
  },
  {
    id: '3',
    title: 'Show Title 3',
    description: 'Show Description 3',
    images: {
      x1: 'https://via.placeholder.com/800x450/000/FFF?text=Show%203',
      x2: 'https://via.placeholder.com/1600x900/000/FFF?text=Show%203',
    },
  },
  {
    id: '4',
    title: 'Show Title 4',
    description: 'Show Description 4',
    images: {
      x1: 'https://via.placeholder.com/800x450/000/FFF?text=Show%204',
      x2: 'https://via.placeholder.com/1600x900/000/FFF?text=Show%204',
    },
  },
  {
    id: '5',
    title: 'Show Title 5',
    description: 'Show Description 5',
    images: {
      x1: 'https://via.placeholder.com/800x450/000/FFF?text=Show%205',
      x2: 'https://via.placeholder.com/1600x900/000/FFF?text=Show%205',
    },
  },
  {
    id: '6',
    title: 'Show Title 6',
    description: 'Show Description 6',
    images: {
      x1: 'https://via.placeholder.com/800x450/000/FFF?text=Show%206',
      x2: 'https://via.placeholder.com/1600x900/000/FFF?text=Show%206',
    },
  },
]

export const getShowById = async (id: string) => shows.find((show) => show.id === id) ?? null
