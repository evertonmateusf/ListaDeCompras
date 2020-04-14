import { ListaDeComprasDTO } from '../models/lisdaDeCompras.dto';
import { Injectable } from "@angular/core";
import { StorageService } from './storage.service';

@Injectable()
export class ListaService {
    
    constructor(public storage: StorageService) {
    }
    getLista() : ListaDeComprasDTO {
        return this.storage.getLista();
    }

    setLista(obj : ListaDeComprasDTO) {
        this.storage.setLista(obj);
    }

}