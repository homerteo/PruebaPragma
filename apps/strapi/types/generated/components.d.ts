import type { Schema, Struct } from '@strapi/strapi';

export interface FooterCertificacion extends Struct.ComponentSchema {
  collectionName: 'components_footer_certificacions';
  info: {
    displayName: 'Certificacion';
    icon: 'file';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    heigth: Schema.Attribute.Integer;
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    icon: 'hashtag';
  };
  attributes: {
    certifications: Schema.Attribute.Component<'footer.certificacion', true>;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    navLinks: Schema.Attribute.Component<'footer.nav-links', true>;
    socialLinks: Schema.Attribute.Component<'footer.social-links', true>;
  };
}

export interface FooterNavLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_nav_links';
  info: {
    displayName: 'navLinks';
    icon: 'bulletList';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'socialLinks';
    icon: 'twitter';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationMenuDropdown extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_dropdowns';
  info: {
    displayName: 'menu-dropdown';
    icon: 'bulletList';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    subItems: Schema.Attribute.Component<'navigation.menu-item', true>;
    url: Schema.Attribute.String;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    displayName: 'menu-link';
    icon: 'bulletList';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'doctor';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String & Schema.Attribute.Required;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ViewsCardSection extends Struct.ComponentSchema {
  collectionName: 'components_views_card_sections';
  info: {
    displayName: 'card-section';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'views.link-card', true>;
    secondaryButtonText: Schema.Attribute.String;
    secondaryButtonUrl: Schema.Attribute.String;
    showSecondaryButton: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ViewsContent extends Struct.ComponentSchema {
  collectionName: 'components_views_contents';
  info: {
    displayName: 'content';
    icon: 'code';
  };
  attributes: {
    cardSection: Schema.Attribute.Component<'views.card-section', true>;
    heroSection: Schema.Attribute.Component<'views.hero-section', false>;
  };
}

export interface ViewsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_views_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ViewsLinkCard extends Struct.ComponentSchema {
  collectionName: 'components_views_link_cards';
  info: {
    displayName: 'link-card';
    icon: 'envelop';
  };
  attributes: {
    blue: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    buttonCard: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
    urlDescription: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'footer.certificacion': FooterCertificacion;
      'footer.footer': FooterFooter;
      'footer.nav-links': FooterNavLinks;
      'footer.social-links': FooterSocialLinks;
      'navigation.menu-dropdown': NavigationMenuDropdown;
      'navigation.menu-item': NavigationMenuItem;
      'shared.seo': SharedSeo;
      'views.card-section': ViewsCardSection;
      'views.content': ViewsContent;
      'views.hero-section': ViewsHeroSection;
      'views.link-card': ViewsLinkCard;
    }
  }
}
