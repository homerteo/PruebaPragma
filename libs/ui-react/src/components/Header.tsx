import React, { useState } from 'react';
import type { MenuItem } from '@bhd-test/shared-domain';

export interface HeaderProps {
  logoUrl: string;
  menuItems: MenuItem[];
  ctaUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({ logoUrl, menuItems, ctaUrl = '/hazte-cliente' }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | number | null>(null);


  const toggleDropdown = (id: string | number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
<header className="sticky top-0 z-50 flex h-20 w-full items-center justify-center border-b border-gray-100 bg-white shadow-header">
  <div className="flex w-full max-w-[1136px] items-center justify-between px-4">
    
    <a href="/"><img src={logoUrl} alt="Logo" className="h-10 w-auto" /></a>

    <nav className="hidden xl:flex items-center gap-6">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => item.subItems?.length && setActiveDropdown(item.id)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button 
            onClick={() => toggleDropdown(item.id)}
            className="flex items-center gap-1 font-semibold text-gray-400 transition-colors hover:text-primary"
          >
            {item.label}
          </button>
          
          {/* Menú Desplegable */}
          {activeDropdown === item.id && item.subItems && (
            <div className="absolute left-0 top-full mt-2 w-48 rounded-lg bg-white p-4 shadow-lg">
              {item.subItems.map(sub => (
                <a key={sub.id} href={sub.url} className="block py-1 text-sm text-gray-400 hover:text-primary">
                  {sub.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>

    <button className="rounded-lg bg-primary px-4 py-2 font-bold text-white transition-colors hover:bg-green-700">
      Abre tu cuenta
    </button>
  </div>
</header>
  );
};