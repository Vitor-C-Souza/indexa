import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatoComponent } from './paginas/lista-contato/lista-contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormularioContatoComponent,
    ListaContatoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
