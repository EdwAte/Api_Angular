import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/module/module.module';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '../../service/services.service';

@Component({
  selector: 'app-episodio',
  standalone: true,
  imports: [HttpClientModule, MaterialModule, CommonModule],
  providers: [RickAndMortyService],
  templateUrl: './episodio.component.html',
  styleUrl: './episodio.component.css'
})
export class EpisodioComponent {
  episodio: any;

  constructor(private servicioApi: RickAndMortyService) { }

  ngOnInit(): void {
    this.servicioApi.cargarEpisodio().subscribe(resultado => {
      this.episodio = resultado.results;
      console.log(this.episodio);
    });
  }
}
