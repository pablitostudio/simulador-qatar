// Importaciones.
import { Component, Input, OnInit } from '@angular/core';

// Decorador.
@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})

// Clase.
export class TituloComponent implements OnInit {

  @Input() titulo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
