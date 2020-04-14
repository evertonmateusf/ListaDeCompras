import { ListaDeComprasDTO } from './../../models/lisdaDeCompras.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListaService } from '../../services/lista.service';

@IonicPage()
@Component({
  selector: 'page-finalizar-compra',
  templateUrl: 'finalizar-compra.html',
})
export class FinalizarCompraPage {
  formGroup: FormGroup;
  listaDeCompras: ListaDeComprasDTO
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public listaService: ListaService ) {

    this.listaDeCompras = this.navParams.get('listaDeCompras');
    this.formGroup = this.formBuilder.group({
      codigo : [this.listaDeCompras.codigo, []],
      descricao : [this.listaDeCompras.descricao, []],
      produtos : [this.listaDeCompras.produtos, []],
      valor : [this.listaDeCompras.valor, []],
      mercado : [this.listaDeCompras.mercado, []],
      situacao : [this.listaDeCompras.situacao, []],
    });
  }
  confirmaFinalizacao() {
    let alert = this.alertCtrl.create({
      title: 'Finalizar compra?',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Não'
        }, {
          text: 'Sim',
          handler: () => {
            this.finalizarCompra();
          }
        }
      ]
    });
    alert.present();
  }

  finalizarCompra() {
    //let loader = this.sharedService.showLoader();
    this.formGroup.get("situacao").setValue("FINALIZADO")
    this.listaService.setLista(this.formGroup.value)
    this.alteracaoOk();
      // .subscribe(response => {
      //   loader.dismiss();
      //   this.alteracaoOk();
      // },
      //   error => {
      //     loader.dismiss();
      //   });
  }

  alteracaoOk() {
    let alert = this.alertCtrl.create({
      title: 'Compra finalizada!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot("EditarCompraPage");
          }
        }
      ]
    });
    alert.present();
  }

}
