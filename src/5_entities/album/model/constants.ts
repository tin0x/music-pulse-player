import posterHouse from '@shared/assets/images/house.webp';
import posterElectronic from '@shared/assets/images/electronic.webp';
import posterDubstep from '@shared/assets/images/dubstep.webp';
import posterHipHop from '@shared/assets/images/hip-hop.webp';
import posterTrap from '@shared/assets/images/trap.webp';
import posterTechHouse from '@shared/assets/images/tech-house.webp';
import posterPop from '@shared/assets/images/pop.webp';
import posterLatin from '@shared/assets/images/latin.webp';
import posterElectro from '@shared/assets/images/electro.webp';
import posterTechno from '@shared/assets/images/techno.webp';

const genres = [
  'House',
  'Electronic',
  'Dubstep',
  'Hip-Hop/Rap',
  'Trap',
  'Tech House',
  'Pop',
  'Latin',
  'Electro',
  'Techno',
];
const posters: Record<string, string> = {
  House: posterHouse,
  Electronic: posterElectronic,
  Dubstep: posterDubstep,
  'Hip-Hop/Rap': posterHipHop,
  Trap: posterTrap,
  'Tech House': posterTechHouse,
  Pop: posterPop,
  Latin: posterLatin,
  Electro: posterElectro,
  Techno: posterTechno,
};

export const albums = genres.map((item) => ({
  title: item,
  poster: posters[item],
  param: item,
}));
