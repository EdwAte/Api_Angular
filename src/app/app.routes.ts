import { Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes/personajes.component';
import { LocalizacionComponent } from './localizacion/localizacion/localizacion.component';
import { EpisodioComponent } from './episodio/episodio/episodio.component';

export const routes: Routes = [

    {
        path: "",
        component: PersonajesComponent
    },
    {
      path: 'localizacion',
      component: LocalizacionComponent
    },
    {
      path: 'episodio',
      component: EpisodioComponent
    },

];
