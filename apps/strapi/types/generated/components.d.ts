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
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    }
  }
}
