import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddProdutoDTO } from '../../models/addProduto.dto';

@IonicPage()
@Component({
  selector: 'page-adicionar-produto',
  templateUrl: 'adicionar-produto.html',
})
export class AdicionarProdutoPage {
  itens: AddProdutoDTO[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itens = [
      { descricao: 'Suco', isChecked: false },
      { descricao: 'Arroz', isChecked: false },
      { descricao: 'Macarrão', isChecked: false },
      { descricao: 'Milho', isChecked: false },
      { descricao: 'Ervilha', isChecked: false },
      { descricao: 'Azeite', isChecked: false },
      { descricao: 'Feijão', isChecked: false }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarProdutoPage');
  }
  adicionar(){

  }
  doSearch(){

  }
}
