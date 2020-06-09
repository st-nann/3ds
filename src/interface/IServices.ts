import { IMenu } from "@/interface/data/base/IServices";

export interface IAliasListMenu {
  [key: string]: {
    name: string;
    menu_name: string;
  }[];
}

export interface IAliasMenu {
  name: string;
  menu_name: string;
}

export interface IMenuDetail {
  description: object;
  hypervisor?: string;
  roles?: object[];
  breakpoint?: string;
  page?: string;
}

export interface IFilterMenu extends IMenu, IMenuDetail {}
