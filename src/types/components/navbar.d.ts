import { ReactNode } from 'react'

export interface INavbarLinksProps {
  title: string
  to: string
  children?: ReactNode
  className?: string
}
