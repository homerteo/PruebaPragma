export interface MenuItem {
  id: string | number;
  label: string;
  url?: string;
  isExternal?: boolean;
  subItems?: MenuItem[];
}

export interface NavigationResponse {
  data: {
    id: number;
    attributes: {
      title: string;
      items: Array<MenuLink | MenuDropdown>;
    };
  };
}

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
  url?: string;
  isExternal?: boolean;
  subItems?: MenuLink[];
}

export interface Navigation {
  title: string;
  items: Array<MenuLink | MenuDropdown>;
}

export interface SeoComponent {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaImage?: { data: { attributes: { url: string } } };
  canonicalUrl: string;
}

export interface FinancialService {
  id: string | number;
  title: string;
  description: string;
  category: string;
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

export interface Footer {
  certifications: FooterCertification[];
  socialLinks: FooterSocialLink[];
  navLinks: FooterNavLink[];
  logo: StrapiImage;
  description: string;
}

export interface StrapiImage {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export interface FooterResponse {
  name: string;
  Footer: Footer[];
}

export interface CardItem {
  icon?: StrapiImage;
  title: string;
  description?: string;
  url?: string;
  urlDescription?: string;
  blue?: boolean;
  buttonCard?: boolean;
}

export interface CardSection {
  title: string;
  subtitle: string;
  cards: CardItem[];
  showSecondaryButton?: boolean;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

export interface HeroSection {
  title: string;
  description: unknown;
  image?: StrapiImage;
}

export interface Seo {
  metaTitle: string;
  metaDescription: string;
  metaImage?: StrapiImage[];
  keywords?: string;
  canonicalURL: string;
}

export interface Page {
  id: number;
  title: string;
  slug: string;
  seo?: Seo;
  content: {
    id: number;
    __component: string;
    heroSection?: HeroSection;
    cardSection?: CardSection[];
  }[];
}
