import { ListaDeComprasDTO } from '../models/lisdaDeCompras.dto';
import { Injectable } from "@angular/core";
import { StorageService } from './storage.service';

@Injectable()
export class ListaService {
    
    constructor(public storage: StorageService) {
        let itens = [
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
          let lista = {
            "codigo": "1",
            "descricao": "Minha lista",
            "produtos": itens,
            "valor": 0,
            "mercado": "Assaí",
            "situacao": "EM ANDAMENTO"
          }
          this.setLista(lista);
    }

    getLista() : ListaDeComprasDTO {
        return this.storage.getLista();
    }

    getListas() : ListaDeComprasDTO[] {
        return [this.storage.getLista(),this.storage.getLista()];
    }

    setLista(obj : ListaDeComprasDTO) {
        this.storage.setLista(obj);
    }

}