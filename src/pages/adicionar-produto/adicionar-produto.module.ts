import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarProdutoPage } from './adicionar-produto';

@NgModule({
  declarations: [
    AdicionarProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarProdutoPage),
  ],
})
export class AdicionarProdutoPageModule {}
