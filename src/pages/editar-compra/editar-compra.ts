import { ProdutoDTO } from './../../models/produto.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray } from 'ionic-angular';

/**
 * Generated class for the EditarCompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-compra',
  templateUrl: 'editar-compra.html',
})
export class EditarCompraPage {
  itens: ProdutoDTO[];
  itensComprados: ProdutoDTO[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itens = [
      { descricao: 'Suco', quantidade: 2, observacao: '' },
      { descricao: 'Arroz', quantidade: 1, observacao: 'Trazer Prato Fino' },
      { descricao: 'Feijão', quantidade: 1, observacao: 'Camil' }
    ]
    this.itensComprados = [
      { descricao: 'Álcool', quantidade: 20, observacao: '' },
      { descricao: 'Cerveja', quantidade: 4, observacao: '' },
      { descricao: 'Molho de tomate', quantidade: 1, observacao: 'Pomarola' }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarCompraPage');
  }

  marcarComoComprado(item: ProdutoDTO) {
    this.itensComprados.push(item);
    this.itens = this.itens.filter(function (elemento) { return elemento.descricao != item.descricao; });
  }

  voltarParaAListaComprar(item: ProdutoDTO) {
    this.itens.push(item);
    this.itensComprados = this.itensComprados.filter(function (elemento) { return elemento.descricao != item.descricao; });
  }
  adicionarItem(){

  }

  reordenarItens(indexes) {
    this.itens = reorderArray(this.itens, indexes);
  }
  reordenarItensComprados(indexes) {
    this.itens = reorderArray(this.itens, indexes);
  }
}
