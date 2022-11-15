// Importaciones.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TituloComponent } from './titulo/titulo.component';
import { GruposComponent } from './grupos/grupos.component';
import { EliminatoriasComponent } from './eliminatorias/eliminatorias.component';

// Decorador.
@NgModule({
  declarations: [
    TituloComponent,
    GruposComponent,
    EliminatoriasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TituloComponent,
    GruposComponent,
    EliminatoriasComponent
  ]
})

// Clase.
export class ComponentsModule { }
