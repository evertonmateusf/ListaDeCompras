import { ListaDeComprasDTO } from './../../models/lisdaDeCompras.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaService } from '../../services/lista.service';

@IonicPage()
@Component({
  selector: 'page-lista-compras',
  templateUrl: 'lista-compras.html',
})
export class ListaComprasPage {
  listas: ListaDeComprasDTO[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public listaService: ListaService) {
    this.listas = this.listaService.getListas();
  }

  ionViewDidEnter() {

  }
  novaCompra(){
    let codigo = (this.listaService.getListas().length).toString()
    let lista = {
      "codigo": codigo,
      "descricao": "Compra " + codigo,
      "produtos": [],
      "valor": 0,
      "mercado": "",
      "situacao": "EM ANDAMENTO"
    }
    this.navCtrl.push("EditarCompraPage", {lista: lista});
  }
  editarCompra(lista: ListaDeComprasDTO){
    this.navCtrl.push("EditarCompraPage", {lista: lista});
  }
}
