import { Navigation, FooterResponse, Page } from '@bhd-test/shared-domain';
import qs from 'qs';

export const strapiService = {
  getNavbar: async (baseUrl: string, token: string): Promise<Navigation> => {
    const response = await fetch(
      `${baseUrl}/api/navigation?populate=items.subItems`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: No se pudo obtener la navegación`,
      );
    }

    const json = await response.json();

    if (!json.data) {
      throw new Error('La estructura de la respuesta no contiene "data"');
    }

    return json.data;
  },
  getFooter: async (
    baseUrl: string,
    token: string,
  ): Promise<FooterResponse> => {
    const params = new URLSearchParams({
      'populate[0]': 'Footer.logo',
      'populate[1]': 'Footer.certifications.image',
      'populate[2]': 'Footer.socialLinks.icon',
      'populate[3]': 'Footer.navLinks',
    });

    const url = `${baseUrl}/api/footer?${params.toString()}`;

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok)
      throw new Error(`Error ${response.status}: Footer no encontrado`);

    const json = await response.json();
    return json.data;
  },
  getPageBySlug: async (
    baseUrl: string,
    token: string,
    slug: string,
  ): Promise<Page> => {
    const url = `${baseUrl}/api/pages?filters[slug][$eq]=${slug}&populate=*`;

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const json = await response.json();
    return json.data[0];
  },
  getHome: async (baseUrl: string, token: string): Promise<Page> => {
    const docId = 'mv45ewgxms210e9rgv1vv45r';

    const query = qs.stringify(
      {
        populate: [
          'seo.metaImage',
          'content.heroSection.image',
          'content.cardSection.cards.icon',
        ],
      },
      { encodeValuesOnly: true },
    );
    const url = `${baseUrl}/api/pages/${docId}?${query}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      console.error('--- ERROR DETALLADO STRAPI 5 ---');
      console.error(JSON.stringify(json, null, 2));
      throw new Error(
        `Error ${response.status}: ${json.error?.message ?? 'Error al obtener la página principal'}`,
      );
    }

    return json.data;
  },
};
