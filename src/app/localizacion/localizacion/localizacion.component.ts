import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/module/module.module';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '../../service/services.service';

@Component({
  selector: 'app-localizacion',
  standalone: true,
  imports: [HttpClientModule, MaterialModule, CommonModule],
  providers: [RickAndMortyService],
  templateUrl: './localizacion.component.html',
  styleUrl: './localizacion.component.css'
})
export class LocalizacionComponent {

  localizacion: any;

  constructor(private servicioApi: RickAndMortyService) { }

  ngOnInit(): void {
    this.servicioApi.cargarLocalizacion().subscribe(resultado => {
      this.localizacion = resultado.results;
      console.log(this.localizacion);
    });
  }

}
