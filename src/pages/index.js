import React from "react";
import TopBar from "../components/Header";
import { Grid } from '@material-ui/core';
import {ProdutosPromocao} from "../components/Data";

export default function Home(props) {

    return (
        <div>
            <TopBar />
            <div name="promo">
                <h1>Produtos em Promoção</h1>
                <Grid container spacing={3} justifyContent="space-around">
                    {ProdutosPromocao.map((item, key) =>
                        <Grid item lg={2} md={4} sm={6} xs={12} key={key}>
                        {item.id}
                        {item.title}
                        {item.price}
                        {item.prazo}
                        {item.tipo}
                        {item.thumb}
                   </Grid>
                    )}
                 
                </Grid>
            </div>
        </div>
    )
}