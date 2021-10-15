import React from "react";
import TopBar from "../components/Header";
import { Grid } from '@material-ui/core';
import { ProdutosPromocao, ProdutosNovidades } from "../components/Data";
import ItemCard from '../components/Item';
import { Container } from "@mui/material";

function abrir() {

}

export default function Home(props) {
    return (
        <div>
            <TopBar />
                <div className="promo">
                    <h1>Produtos em Promoção</h1>
                    <Grid container spacing={3} justifyContent="space-around">
                        {ProdutosPromocao.map((item, key) =>
                            <Grid lg={2} md={4} sm={6} xs={12} key={key}>
                                <ItemCard onClick={abrir} itemObj={item} />
                            </Grid>
                        )}
                    </Grid>
                </div>
                <div className="news">
                    <h1>Últimas Novidades</h1>
                    <Grid container spacing={3} justifyContent="space-around">
                        {ProdutosNovidades.map((item, key) =>
                            <Grid lg={2} md={4} sm={6} xs={12} key={key}>
                                <ItemCard itemObj={item} />
                            </Grid>
                        )}
                    </Grid>
                </div>
        </div>
    )
}