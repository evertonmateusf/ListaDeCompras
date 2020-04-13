import { ProdutoDaListaDTO } from './../../models/produtoDaLista.dto';
import { ProdutoDTO } from './../../models/produto.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray, AlertController } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { AddProdutoDTO } from '../../models/addProduto.dto';
import { ProdutoService } from '../../services/produto.service';

@IonicPage()
@Component({
  selector: 'page-editar-compra',
  templateUrl: 'editar-compra.html',
})
export class EditarCompraPage {
  itens: ProdutoDaListaDTO[];
  itensFiltrados: AddProdutoDTO[];
  reordenar: boolean;
  searchQuery: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public storage: StorageService,
    public produtoService: ProdutoService) {
    this.reordenar = false;
    this.searchQuery = "";
    this.itensFiltrados = [];
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
    this.salvarLista();

  }
  ionViewDidEnter() {
    let lista = this.storage.getLista()
    if (lista) {
      this.itens = lista.produtos;
    }
  }
  salvarLista() {
    let lista = {
      "codigo": "1",
      "descricao": "Minha lista",
      "produtos": this.itens,
      "valor": 0,
      "mercado": "Assaí",
      "situacao": "EM ANDAMENTO"
    }
    this.storage.setLista(lista);
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
    this.itens = produtos.concat(this.itens)
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
            this.itens = this.itens.filter(function (elemento) { return elemento.descricao != item.descricao; });
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
    this.itens = reorderArray(this.itens, indexes);
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
}
