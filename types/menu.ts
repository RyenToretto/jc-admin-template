interface IMenuItem {
  title: string;
  icon?: string;
  active?: boolean;
}

interface IMenu extends IMenuItem {
  children?: IMenuItem[];
}
