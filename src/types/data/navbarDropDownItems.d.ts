export interface INavbarDropDownSubLabelItems {
  label: string
  to: string
  imageLink?: string
}

export interface INavbarDropDownSubLabel {
    name: string
    items: INavbarDropDownSubLabelItems[]
}

export interface INavbarDropDownItems {
  label: string
  to: string
  subLabel: INavbarDropDownSubLabel[]
}
