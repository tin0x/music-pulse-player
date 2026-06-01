declare module '*.svg?react' {
  import { SVGProps } from 'react';
  const SVG: React.FC<SVGProps<SVGSVGElement>>;
  export default SVG;
}
