import { Injectable } from "@angular/core";
import { ProdutoDTO } from '../models/produto.dto';

@Injectable()
export class ProdutoService {

    getProdutos(): ProdutoDTO[] {
        return [
            {
                "descricao": "Açúcar",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Aveia em flocos",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Caldo de carne",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Caldo de galinha",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Caldo de legumes",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Catchup",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Extrato de tomate",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Gelatina em pó",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Iogurte de frutas",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Leite de coco",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Leite fermentado",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Macarrão instantâneo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Massa de lasanha",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Óleo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Sal",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Suco de frutas",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Adoçante",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Azeite",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Bebida láctea",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Cereal",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Creme de leite",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Fermento biológico",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Geleia",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Iogurte natural",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Leite desnatado",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Leite integral",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Maionese",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Molho de tomate",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Ovos",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Sal grosso",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Torradas",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Arroz",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Barras de cereal",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Chá em saquinho",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Essência de baunilha",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Fermento em pó",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Granola",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Leite condensado",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Leite em pó",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Macarrão",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Maisena",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Mostarda",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Polpa de tomate",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Sopa",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Vinagre",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Massa de bolo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Biscoito",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Café",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Farinha de rosca",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Farinha de mandioca",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Farinha de trigo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Farinha de milho",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Feijão",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Lentilha",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Fubá",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Soja",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Farofa",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Grão de bico",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Achocolatado em pó",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Azeitonas",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Palmito",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Aspargo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Champignon",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Atum",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Ervilha",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Milho",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Carnes e frios",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Almôndegas",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Margarina",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Requeijão",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Gordura vegetal",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Queijo mozarela",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Queijo branco",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Queijo parmesão ralado",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Manteiga",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Carne bovina",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Filé de peixe",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Linguiça",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Frango",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Peito de frango",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Empanados",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Hambúrguer",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Peixe",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Bebidas",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Água mineral",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Refrigerante",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Suco",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Cerveja",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Vinho",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Abacate",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Abobrinha",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Agrião",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Alface",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Banana",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Berinjela",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Caju",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Chicória",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Couve-flor",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Goiaba",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Abacaxi",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Açafrão",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Aipo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Alho",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Batata doce",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Beterraba",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Cebola",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Chuchu",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Espinafre",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Hortelã",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Abóbora",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Acelga",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Alecrim",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Ameixa",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Batata inglesa",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Brócolis",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Cenoura",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Jerimum",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Kiwi",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Laranja",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Mamão",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Maracujá",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Milho verde",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Pepino",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Quiabo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Salsa",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Uvas",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Limão",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Manga",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Melancia",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Morango",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Pera",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Repolho",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Salsinha",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Vagem",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Maçã",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Manjericão",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Melão",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Nabo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Pimentão",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Rúcula",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Tomate",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Produtos em geral",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Copos descartáveis",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Pano de chão",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Papel manteiga",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Potes descartáveis",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Rodo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Fósforos",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Papel alumínio",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Papel toalha",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Prendedor de roupa",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Vassoura",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Lâmpada",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Papel filme",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Pilhas",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Ração para animais",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Velas",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Absorvente",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Álcool",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Antisséptico bucal",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Cotonete",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Desinfetante",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Esponja",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Gel",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Inseticida",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Lenço de papel",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Palha de aço",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Papel higiênico",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Protetor solar",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Sabonete",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Shampoo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Condicionador",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Acetona",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Algodão",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Aparelho de barbear",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Creme de barbear",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Desodorante",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Escova de cabelo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Fio dental",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Guardanapos",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Lâmina de barbear",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Limpa-vidros",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Palito de dente",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Pente",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Sabão em pó",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Saco de lixo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Talco",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Água sanitária",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Amaciante",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Creme dental",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Desodorizador de ambiente",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Escova de dente",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Hidratante",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Lava-roupas",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Lustra móvel",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Pano de limpeza",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Preservativo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Sabão em pedra",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Sapólio",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Desengordurante",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Bolachas",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Pão de forma",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Pão francês",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Bolo",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Temperos",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Cravo da índia",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Noz-moscada",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Bicarbonato de sódio",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Canela",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Louro",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Pimenta",
                "quantidade": 1,
                "observacao": ""
            },
            {
                "descricao": "Curry",
                "quantidade": 1,
                "observacao": ""
            }
        ]
    }

}