import { ProdutoDaListaDTO } from './produtoDaLista.dto';
export class ListaDeComprasDTO {
    codigo: string;
    descricao: string;
    produtos: ProdutoDaListaDTO[];
    valor: number;
    mercado: string;
    situacao: string;
}