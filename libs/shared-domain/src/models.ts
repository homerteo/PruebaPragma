export interface MenuItem {
  id: string | number;
  label: string;
  url?: string; 
  isExternal?: boolean;
  subItems?: MenuItem[];
}

export interface FinancialService {
  id: string | number;
  title: string;
  description: string;
  category: string;
}