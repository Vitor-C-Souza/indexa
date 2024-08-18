import { Routes } from '@angular/router';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatoComponent } from './paginas/lista-contato/lista-contato.component';
import { PerfilContatoComponent } from './paginas/perfil-contato/perfil-contato.component';

export const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioContatoComponent,
  },
  {
    path: 'formulario/:id',
    component: FormularioContatoComponent,
  },
  {
    path: 'lista-contatos',
    component: ListaContatoComponent,
  },
  {
    path: '',
    redirectTo: '/lista-contatos',
    pathMatch: 'full',
  },
  {
    path: 'perfil-contato/:id',
    component: PerfilContatoComponent,
  },
];
