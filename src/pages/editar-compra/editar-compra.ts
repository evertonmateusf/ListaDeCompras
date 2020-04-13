import { ProdutoDaListaDTO } from './../../models/produtoDaLista.dto';
import { ProdutoDTO } from './../../models/produto.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-editar-compra',
  templateUrl: 'editar-compra.html',
})
export class EditarCompraPage {
  itens: ProdutoDaListaDTO[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.itens = [
      { descricao: 'Suco', quantidade: 2, observacao: '', comprado: false },
      { descricao: 'Arroz', quantidade: 1, observacao: 'Trazer Prato Fino', comprado: false },
      { descricao: 'Macarrão', quantidade: 1, observacao: 'Parafuso', comprado: false },
      { descricao: 'Milho', quantidade: 1, observacao: '', comprado: false },
      { descricao: 'Ervilha', quantidade: 1, observacao: '', comprado: false },
      { descricao: 'Azeite', quantidade: 1, observacao: '', comprado: false },
      { descricao: 'Feijão', quantidade: 1, observacao: 'Camil', comprado: false },
      { descricao: 'Álcool', quantidade: 20, observacao: '', comprado: true },
      { descricao: 'Cerveja', quantidade: 4, observacao: '', comprado: true },
      { descricao: 'Molho de tomate', quantidade: 1, observacao: 'Pomarola', comprado: true }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarCompraPage');
  }

  marcarComoComprado(item: ProdutoDaListaDTO) {
    item.comprado = true;
    // this.itensComprados.unshift(item);
    // this.itens = this.itens.filter(function (elemento) { return elemento.descricao != item.descricao; });
  }

  voltarParaAListaComprar(item: ProdutoDaListaDTO) {
    item.comprado = false;
    // this.itens.push(item);
    // this.itensComprados = this.itensComprados.filter(function (elemento) { return elemento.descricao != item.descricao; });
  }
  adicionarItem() {
    this.navCtrl.push('AdicionarProdutoPage', {});
  }
  excluirItem(item: ProdutoDTO) {
    let alert = this.alertCtrl.create({
      title: 'Excluir item da lista?',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.itens = this.itens.filter(function (elemento) { return elemento.descricao != item.descricao; });
          }
        }, {
          text: 'Não',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }

  editarItem(item: ProdutoDTO) {
    alert(item.descricao)
  }
  reordenarItens(indexes) {
    this.itens = reorderArray(this.itens, indexes);
  }
}
