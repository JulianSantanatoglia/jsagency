// Import all images as modules so Vite can process them
import paso1 from '../../public/images/paso1.png';
import paso2 from '../../public/images/paso2.png';
import paso3 from '../../public/images/paso3.png';
import paso4 from '../../public/images/paso4.png';
import paso5 from '../../public/images/paso5.png';
import paso6 from '../../public/images/paso6.png';
import placeholder from '../../public/images/placeholder.svg';

// Project images
import mushroom from '../../public/images/proyectos/1mushroommdp.png';
import joyeria from '../../public/images/proyectos/3joyeriadiaz.png';
import automatizaciones from '../../public/images/proyectos/make.png';
import inmobiliaria from '../../public/images/proyectos/inmobiliaria.jpg';

export const images = {
  steps: {
    paso1,
    paso2,
    paso3,
    paso4,
    paso5,
    paso6,
  },
  projects: {
    mushroom,
    joyeria,
    automatizaciones,
    inmobiliaria,
  },
  placeholder,
} as const;
