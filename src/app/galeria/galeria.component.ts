import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  @Input() foto: string[] = [];
  @Input() titulo: string;
  next() {
    this.fotoAtual++;
  }

  previous() {
    this.fotoAtual--;
  }
  fotoAtual: number = 0;
}
