import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { MenuController, NavController, NavParams } from '@ionic/angular';
import { ListaService } from 'src/app/services/lista.service';
import { ListaDeComprasModel } from 'src/app/models/lisdaDeCompras.model';
import { AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  listas: string[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService,
    private menuCtrl: MenuController,
    private listaService: ListaService) {
    this.listas = [];
    this.listaService.getListaDeComprasList().valueChanges().subscribe((values) => {
      values.forEach((value) => this.listas.push(value));
    });
    console.log(this.listas);
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.getData();
  }
  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      this.router.navigate(['login']);
    }, (error) => {
      console.log('signout error', error);
    });
  }

  getData() {
    // this.firebaseService.getListas()
    // .then(listas => {
    //   // this.items = tasks;
    //   console.log(listas)
    // })
  }
  novaCompra() {
    this.router.navigate(['editar-compra']);
  }
  editarCompra(lista: ListaDeComprasModel) {
    const navigationExtras: NavigationExtras = {
      state: {
        lista  // this.listaService.getListaDeCompras(id);
      }
    };
    this.router.navigate(['editar-compra'], navigationExtras);

  }
}
