export interface MenuLink {
  __component: 'navigation.menu-link';
  id: number;
  label: string;
  url?: string;
  isExternal?: boolean;
}

export interface MenuDropdown {
  __component: 'navigation.menu-dropdown';
  id: number;
  label: string;
  subItems?: MenuLink[];
}

export interface Navigation {
  title: string;
  items: Array<MenuLink | MenuDropdown>;
}

export interface FooterCertification {
  id: string | number;
  label: string;
  href: string;
  alt: string;
  width?: number;
  heigth?: number;
  image: StrapiImage;
}

export interface FooterSocialLink {
  id: string | number;
  label: string;
  href: string;
  icon: StrapiImage;
}

export interface FooterNavLink {
  id: string | number;
  label: string;
  href: string;
}
export interface StrapiImage {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export interface Footer {
  certifications: FooterCertification[];
  socialLinks: FooterSocialLink[];
  navLinks: FooterNavLink[];
  logo: StrapiImage;
  description: string;
}

export interface FooterResponse {
  name: string;
  Footer: Footer[];
}
