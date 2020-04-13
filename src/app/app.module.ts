import { FinalizarCompraPageModule } from './../pages/finalizar-compra/finalizar-compra.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EditarCompraPage } from '../pages/editar-compra/editar-compra';
import { FinalizarCompraPage } from '../pages/finalizar-compra/finalizar-compra';
import { StorageService } from '../services/storage.service';
import { ProdutoService } from '../services/produto.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditarCompraPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FinalizarCompraPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditarCompraPage,
    FinalizarCompraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StorageService,
    ProdutoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
