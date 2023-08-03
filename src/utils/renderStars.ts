import { ReactNode } from 'react'

const renderStars = (ratings: number, star: ReactNode) => {
  const fullStars = Math.floor(ratings)
  const stars = []

  for (let i = 0; i < fullStars; i++) {
    stars.push(star)
  }

  return stars
}

export default renderStars