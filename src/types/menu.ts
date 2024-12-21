export type SubMenu = {
  title: string;
  url?: string;
  menu?: Array<SubMenu>;
};

export type MenuItem = Array<{
  groupTitle: string;
  menu: Array<SubMenu>;
}>;
