import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCompraPageRoutingModule } from './editar-compra-routing.module';

import { EditarCompraPage } from './editar-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCompraPageRoutingModule
  ],
  declarations: [EditarCompraPage]
})
export class EditarCompraPageModule {}
