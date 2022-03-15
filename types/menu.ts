export interface IMenuItem {
  title: string
  icon?: string
  active?: boolean
}

export interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}
