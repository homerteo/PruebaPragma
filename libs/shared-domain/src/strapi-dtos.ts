export interface StrapiResponse<T> {
  data: StrapiData<T>[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

export interface MenuItemDTO {
  label: string;
  url: string;
  order: number;
  isExternal: boolean;
}

export interface FinancialServiceDTO {
  title: string;
  description: string;
  category: string;
  isActive: boolean;
}