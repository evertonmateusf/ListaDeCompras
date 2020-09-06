import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ListaDeComprasModel } from 'src/app/models/lisdaDeCompras.model';
import { AddProdutoModel } from 'src/app/models/addProduto.model';
import { ListaService } from 'src/app/services/lista.service';
import { ProdutoDaListaModel } from 'src/app/models/produtoDaLista.model';
import { ProdutoModel } from 'src/app/models/produto.model';
import { AlertController } from '@ionic/angular';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-editar-compra',
  templateUrl: './editar-compra.page.html',
  styleUrls: ['./editar-compra.page.scss'],
})
export class EditarCompraPage {
  lista: ListaDeComprasModel;
  itensFiltrados: AddProdutoModel[];
  reordenar: boolean;
  searchQuery: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listaService: ListaService,
    private produtoService: ProdutoService,
    public alertCtrl: AlertController) {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.lista = getNav.extras.state.lista;
      }
    });
    if (!this.lista) {
      this.lista = new ListaDeComprasModel();
      this.lista.descricao = '';
      this.lista.produtos = [];
      this.lista.valor = 0;
      this.lista.mercado = '';
      this.lista.situacao = '';
    }

    this.reordenar = false;
    this.searchQuery = '';
    this.itensFiltrados = [];
  }

  salvarLista() {
    if (this.lista.$codigo) {
      this.listaService.updateListaDeCompras(this.lista.$codigo, this.lista);
    } else {
      this.listaService.createLista(this.lista);
    }
  }

  marcarComoComprado(item: ProdutoDaListaModel) {
    item.comprado = true;
    this.salvarLista();
  }

  voltarParaAListaComprar(item: ProdutoDaListaModel) {
    item.comprado = false;
    this.salvarLista();
  }
  adicionarItem() {
    const produtos = this.itensFiltrados.filter(item => item.isChecked).map(item => {
      return {
        descricao: item.descricao,
        quantidade: 1,
        observacao: '',
        comprado: false
      };
    });
    this.lista.produtos = produtos.concat(this.lista.produtos);
    this.salvarLista();
    this.searchQuery = '';
  }
  async excluirItem(item: ProdutoModel) {
    const alert = await this.alertCtrl.create({
      header: 'Excluir item da lista?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.lista.produtos = this.lista.produtos.filter(elemento =>
              elemento.descricao !== item.descricao);
            this.salvarLista();
          }
        }, {
          text: 'Não',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

  editarItem(item: ProdutoModel) {
    alert(item.descricao);
  }

  reordenarItens(event: { detail: { from: number; to: number; complete: () => void; }; }) {
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
    const draggedItem = this.lista.produtos.splice(event.detail.from, 1)[0];
    this.lista.produtos.splice(event.detail.to, 0, draggedItem);
    // this.listItems = reorderArray(this.listItems, event.detail.from, event.detail.to);
    event.detail.complete();
    // this.lista.produtos = reorderArray(this.lista.produtos, indexes);
    // this.salvarLista();
  }

  filtrarLista(itens: ProdutoDaListaModel[], comprado: boolean) {
    if (itens) {
      return itens.filter(el => {
        return el.comprado === comprado;
      });
    }
  }
  iniciaFiltro() {
    let produtosOrdenados = [];
    this.produtoService.getProdutoList().valueChanges().subscribe((values) => {
      values.forEach((value) => produtosOrdenados.push(value));
    });
    produtosOrdenados.sort((a: ProdutoModel, b: ProdutoModel) => {
      if (a.descricao >= b.descricao) {
        return 1;
      } else {
        return -1;
      }
    }).map((item: { descricao: string, isChecked: boolean; }) =>
      ({ descricao: item.descricao, isChecked: false })
    );

    if (this.lista?.produtos) {
      produtosOrdenados = produtosOrdenados.filter(item => {
        return this.lista.produtos.filter(itemNaLista => {
          return itemNaLista.descricao === item.descricao;
        }).length === 0;
      });
    }
    this.itensFiltrados = produtosOrdenados;
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
    }).map(item => ({ descricao: item.descricao, isChecked: false }));
  }

  finalizarCompra() {
    // this.navCtrl.push('FinalizarCompraPage', { listaDeCompras: this.lista });
    const navigationExtras: NavigationExtras = {
      state: {
        lista: this.lista   // this.listaService.getListaDeCompras(id);
      }
    };
    this.router.navigate(['finalizar-compra'], navigationExtras);
  }

}
