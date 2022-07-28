import { NegociacoesDia } from "../interfaces/negociacoes-dia.js";
import { Negociacao } from "../models/negociacao";

export class NegociacoesService {

    public obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
        .then(res => res.json())
        .then((dados: NegociacoesDia[]) => {
            return dados.map(dadosHoje => {
                return new Negociacao(
                    new Date(), 
                    dadosHoje.vezes, 
                    dadosHoje.montante)
            })
        })
    }

}