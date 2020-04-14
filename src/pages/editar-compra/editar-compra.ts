import { ListaDeComprasDTO } from './../../models/lisdaDeCompras.dto';
import { ProdutoDaListaDTO } from './../../models/produtoDaLista.dto';
import { ProdutoDTO } from './../../models/produto.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray, AlertController } from 'ionic-angular';
import { AddProdutoDTO } from '../../models/addProduto.dto';
import { ProdutoService } from '../../services/produto.service';
import { ListaService } from '../../services/lista.service';

@IonicPage()
@Component({
  selector: 'page-editar-compra',
  templateUrl: 'editar-compra.html',
})
export class EditarCompraPage {
  lista: ListaDeComprasDTO;
  itensFiltrados: AddProdutoDTO[];
  reordenar: boolean;
  searchQuery: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public listaService: ListaService,
    public produtoService: ProdutoService) {

    this.reordenar = false;
    this.searchQuery = "";
    this.itensFiltrados = [];
    this.lista = this.navParams.get('lista');
  }
  ionViewDidEnter() {
  }

  salvarLista() {
    this.listaService.setLista(this.lista);
  }

  marcarComoComprado(item: ProdutoDaListaDTO) {
    item.comprado = true;
    this.salvarLista()
  }

  voltarParaAListaComprar(item: ProdutoDaListaDTO) {
    item.comprado = false;
    this.salvarLista()
  }
  adicionarItem() {
    let produtos = this.itensFiltrados.filter(item => item.isChecked).map(item => {
      return {
        "descricao": item.descricao,
        "quantidade": 1,
        "observacao": "",
        "comprado": false
      }
    })
    this.lista.produtos = produtos.concat(this.lista.produtos)
    this.salvarLista()
    this.searchQuery = "";
  }
  excluirItem(item: ProdutoDTO) {
    let alert = this.alertCtrl.create({
      title: 'Excluir item da lista?',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.lista.produtos = this.lista.produtos.filter(function (elemento) { return elemento.descricao != item.descricao; });
            this.salvarLista()
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
    this.lista.produtos = reorderArray(this.lista.produtos, indexes);
    this.salvarLista();
  }

  filtrarLista(itens: ProdutoDaListaDTO[], comprado: boolean) {
    return itens.filter(function (el) {
      return el.comprado === comprado;
    })
  }
  iniciaFiltro() {
    let produtosOrdenados = this.produtoService.getProdutos().sort(function (a, b) {
      if (a.descricao >= b.descricao) {
        return 1;
      } else {
        return -1;
      }
    }).map(item => { return { descricao: item.descricao, isChecked: false } })
    if (this.lista.produtos) {
      produtosOrdenados = produtosOrdenados.filter(item => {
        return this.lista.produtos.filter(itemNaLista => {
          return itemNaLista.descricao === item.descricao
        }).length === 0
      })
    }
    this.itensFiltrados = produtosOrdenados
  }

  filterList(evt) {
    this.itensFiltrados = [];
    if (!this.searchQuery) {
      return;
    }
    this.iniciaFiltro();
    this.itensFiltrados = this.itensFiltrados.filter(currentGoal => {
      if (currentGoal.descricao && this.searchQuery) {
        if (currentGoal.descricao.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    }).map(item => { return { descricao: item.descricao, isChecked: false } });
  }

  finalizarCompra(){
    this.navCtrl.push("FinalizarCompraPage",{listaDeCompras : this.lista});
  }
}
