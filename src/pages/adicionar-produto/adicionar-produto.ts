import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddProdutoDTO } from '../../models/addProduto.dto';
import { StorageService } from '../../services/storage.service';
import { ProdutoService } from '../../services/produto.service';
@IonicPage()
@Component({
  selector: 'page-adicionar-produto',
  templateUrl: 'adicionar-produto.html',
})
export class AdicionarProdutoPage {
  itensFiltrados: AddProdutoDTO[];
  itens: AddProdutoDTO[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public produtoService: ProdutoService) {
    this.initializeItems()
    this.itens = this.itensFiltrados
  }

  adicionar() {
    this.salvaLista()
  }

  ionViewDidEnter() {

  }
  salvaLista() {
    let produtos = this.itens.filter(item => item.isChecked).map(item => {
      return {
        "descricao": item.descricao,
        "quantidade": 1,
        "observacao": "",
        "comprado": false
      }
    })
    let listaSalva = this.storage.getLista()
    listaSalva.produtos = listaSalva.produtos.concat(produtos);
    this.storage.setLista(listaSalva);
    this.navCtrl.pop();
  }

  initializeItems() {
    if (this.itens) {
      this.itensFiltrados = this.itens
    } else {
      let produtosOrdenados = this.produtoService.getProdutos().sort(function (a, b) {
        if (a.descricao >= b.descricao) {
          return 1;
        } else {
          return -1;
        }
      }).map(item => { return { descricao: item.descricao, isChecked: false } })
      let produtosNaLista = this.storage.getLista().produtos
      if (produtosNaLista) {
        produtosOrdenados = produtosOrdenados.filter(item => {
          return produtosNaLista.filter(itemNaLista => {
            return itemNaLista.descricao === item.descricao
          }).length === 0
        })
      }
      this.itensFiltrados = produtosOrdenados
    }
  }
  filterList(evt) {
    this.initializeItems();
    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }
    this.itensFiltrados = this.itensFiltrados.filter(currentGoal => {
      if (currentGoal.descricao && searchTerm) {
        if (currentGoal.descricao.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  marcar(item) {
    for (var i = 0; i < this.itens.length; i++) {
      if (this.itens[i].descricao === item.descricao) {
        this.itens[i].isChecked = item.isChecked;
      }
    }
  }
}
