import { Navigation, FooterResponse } from './models';

export const strapiService = {
  getNavbar: async (baseUrl: string, token: string): Promise<Navigation> => {
    const response = await fetch(`${baseUrl}/api/navigation?populate=items.subItems`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: No se pudo obtener la navegación`);
    }

    const json = await response.json();
    
    if (!json.data) {
      throw new Error('La estructura de la respuesta no contiene "data"');
    }
    
    return json.data;
  },
  getFooter: async (baseUrl: string, token: string): Promise<FooterResponse> => {
    const params = new URLSearchParams({
      'populate[0]': 'Footer.logo',
      'populate[1]': 'Footer.certifications.image',
      'populate[2]': 'Footer.socialLinks.icon',
      'populate[3]': 'Footer.navLinks',
    });

    const url = `${baseUrl}/api/footer?${params.toString()}`;

    const response = await fetch(url, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!response.ok) throw new Error(`Error ${response.status}: Footer no encontrado`);

    const json = await response.json();
    return json.data;
  }
};

