import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { ListaDeComprasModel } from '../models/lisdaDeCompras.model';

@Injectable()
export class ListaService {
    ListaDeComprasListRef: AngularFireList<any>;
    listaDeComprasRef: AngularFireObject<any>;

    constructor(private db: AngularFireDatabase) { }

    createLista(lista: ListaDeComprasModel) {
        return this.ListaDeComprasListRef.push({
            descricao: lista.descricao,
            produtos: lista.produtos,
            valor: lista.valor,
            mercado: lista.mercado,
            situacao: lista.situacao
        })
    }

    // Get Single
    getListaDeCompras(id: string) {
        this.listaDeComprasRef = this.db.object('/lista-de-compras/' + id);
        return this.listaDeComprasRef;
    }

    // Get List
    getListaDeComprasList() {
        this.ListaDeComprasListRef = this.db.list('/lista-de-compras');
        return this.ListaDeComprasListRef;
    }

    // Update
    updateListaDeCompras(id: string, lista: ListaDeComprasModel) {
        this.listaDeComprasRef = this.db.object('/lista-de-compras/' + id);
        return this.listaDeComprasRef.update({
            descricao: lista.descricao,
            produtos: lista.produtos,
            valor: lista.valor,
            mercado: lista.mercado,
            situacao: lista.situacao
        });
    }

    // Delete
    deleteListaDeCompras(id: string) {
        this.listaDeComprasRef = this.db.object('/lista-de-compras/' + id);
        this.listaDeComprasRef.remove();
    }

}
