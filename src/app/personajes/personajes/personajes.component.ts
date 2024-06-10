import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/module/module.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RickAndMortyService } from '../../service/services.service';
import { LocalizacionComponent } from '../../localizacion/localizacion/localizacion.component';
import { EpisodioComponent } from '../../episodio/episodio/episodio.component';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [MaterialModule, HttpClientModule, CommonModule, RouterLink, LocalizacionComponent, EpisodioComponent],
  providers: [RickAndMortyService],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  personajes: any;

  constructor(private servicioApi: RickAndMortyService) { }

  ngOnInit(): void {
    this.servicioApi.cargarPersonajes().subscribe(resultado => {
      this.personajes = resultado.results;
      console.log(this.personajes);
    });
  }
}

