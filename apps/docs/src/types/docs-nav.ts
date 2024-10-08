export interface Item {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  items?: Item[];
  icon?: JSX.Element;
}

export interface SubCategory {
  title: string;
  items: Item[];
}

export interface Category {
  title: string;
  slug: string;
  items: (Item | SubCategory)[];
  icon?: JSX.Element;
}

export type DocsNav = Category[];
