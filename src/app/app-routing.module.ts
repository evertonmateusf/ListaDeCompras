import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthPageGuard } from './pages/login/auth-can-activate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
    canActivate: [AuthPageGuard],
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then(m => m.FolderPageModule),
    canActivate: [AuthPageGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'lista-de-compras',
    loadChildren: () => import('./pages/compras/lista-de-compras/lista-de-compras.module').then( m => m.ListaDeComprasPageModule),
    canActivate: [AuthPageGuard],
  },
  {
    path: 'editar-compra',
    loadChildren: () => import('./pages/compras/editar-compra/editar-compra.module').then( m => m.EditarCompraPageModule),
    canActivate: [AuthPageGuard],
  },
  {
    path: 'finalizar-compra',
    loadChildren: () => import('./pages/compras/finalizar-compra/finalizar-compra.module').then( m => m.FinalizarCompraPageModule),
    canActivate: [AuthPageGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthPageGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
