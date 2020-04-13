import { ListaDeComprasDTO } from './../models/lisdaDeCompras.dto';
import { Injectable } from "@angular/core";
// import { STORAGE_KEYS } from "../config/storage_keys.config";
// import { LocalUser } from "../models/local_user";

@Injectable()
export class StorageService {

    getLista() : ListaDeComprasDTO {
        let lista = localStorage.getItem("minhaLista");
        if (lista == null) {
            return null;
        }
        else {
            return JSON.parse(lista);
        }
    }

    setLista(obj : ListaDeComprasDTO) {
        if (obj == null) {
            localStorage.removeItem("minhaLista");
        }
        else {
            localStorage.setItem("minhaLista", JSON.stringify(obj));
            // localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }

}