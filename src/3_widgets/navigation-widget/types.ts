import React from 'react';

export type ItemNavigation = {
  label: string;
  to: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type DataNavigation = {
  title: string;
  items: ItemNavigation[];
};
