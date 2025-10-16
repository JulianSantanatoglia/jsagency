// Import all images as modules so Vite can process them
import paso1 from '/images/paso1.png';
import paso2 from '/images/paso2.png';
import paso3 from '/images/paso3.png';
import paso4 from '/images/paso4.png';
import paso5 from '/images/paso5.png';
import paso6 from '/images/paso6.png';
import placeholder from '/images/placeholder.svg';

// Project images
import mushroom from '/images/proyectos/1mushroommdp.png';
import joyeria from '/images/proyectos/3joyeriadiaz.png';
import automatizaciones from '/images/proyectos/make.png';
import inmobiliaria from '/images/proyectos/inmobiliaria.jpg';

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
