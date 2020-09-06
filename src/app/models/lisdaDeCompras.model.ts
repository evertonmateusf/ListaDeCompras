import { ProdutoDaListaModel } from './produtoDaLista.model';
export class ListaDeComprasModel {
    $codigo: string;
    descricao: string;
    produtos: ProdutoDaListaModel[];
    valor: number;
    mercado: string;
    situacao: string;
}