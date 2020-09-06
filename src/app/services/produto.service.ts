import { Injectable } from '@angular/core';
import { ProdutoModel } from '../models/produto.model';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtoListRef: AngularFireList<any>;
  produtoRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  createLista(produto: ProdutoModel) {
    return this.produtoListRef.push({
      descricao: produto.descricao,
      quantidade: produto.quantidade,
      observacao: produto.observacao,
    })
  }

  // Get Single
  getProduto(id: string) {
    this.produtoRef = this.db.object('/produtos/' + id);
    return this.produtoRef;
  }

  // Get List
  getProdutoList() {
    this.produtoListRef = this.db.list('/produtos');
    return this.produtoListRef;
  }

  // Update
  updateProduto(id, produto: ProdutoModel) {
    this.produtoRef = this.db.object('/produtos/' + id);
    return this.produtoRef.update({
      descricao: produto.descricao,
      quantidade: produto.quantidade,
      observacao: produto.observacao,
    });
  }

  // Delete
  deleteProduto(id: string) {
    this.produtoRef = this.db.object('/produtos/' + id);
    this.produtoRef.remove();
  }
}
