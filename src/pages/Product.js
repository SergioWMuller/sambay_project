import React from "react";
import TopBar from "../components/Header";
import { ProdutosPromocao, ProdutosNovidades } from "../components/Data";
import ProdutoDetalhe from '../components/ItemDetail';

export default function Produto(props) {
    return (
        <div>
            <TopBar />
            <div name="promo">
                <h1>Produtos em Promoção</h1>
                <ProdutoDetalhe  />
            </div>
        </div>
    )
}