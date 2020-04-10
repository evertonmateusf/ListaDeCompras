import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarCompraPage } from './editar-compra';

@NgModule({
  declarations: [
    EditarCompraPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarCompraPage),
  ],
})
export class EditarCompraPageModule {}
