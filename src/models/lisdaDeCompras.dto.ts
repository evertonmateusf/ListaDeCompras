import { ProdutoDaListaDTO } from './produtoDaLista.dto';
export class ListaDeComprasDTO {
    descricao: string;
    produtos: ProdutoDaListaDTO[];
    valor: number;
    mercado: string;
}