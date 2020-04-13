import { FinalizarCompraPageModule } from './../pages/finalizar-compra/finalizar-compra.module';
import { AdicionarProdutoPageModule } from './../pages/adicionar-produto/adicionar-produto.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EditarCompraPage } from '../pages/editar-compra/editar-compra';
import { AdicionarProdutoPage } from '../pages/adicionar-produto/adicionar-produto';
import { FinalizarCompraPage } from '../pages/finalizar-compra/finalizar-compra';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EditarCompraPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AdicionarProdutoPageModule,
    FinalizarCompraPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EditarCompraPage,
    AdicionarProdutoPage,
    FinalizarCompraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
