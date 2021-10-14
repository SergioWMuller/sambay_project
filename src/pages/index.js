import React from "react";
import TopBar from "../components/Header";
import { Grid } from '@material-ui/core';
import {zequinha3} from '../images/zequinha3.jpeg'; // Tell webpack this JS file uses this image


const promo = [
    {
        id: 1,
        title: 'Kit com 3 figurinhas originais do Zequinha de 1979',
        price: 'R$ 12,00',
        prazo: 'Em até 2X',
        tipo: 'Promoção',
        thumb: 'zequinha3',
    },
    {
        id: 2,
        title: 'Kit com 3 figurinhas originais do Zequinha de 1979',
        price: 'R$ 12,00',
        prazo: 'Em até 2X',
        tipo: 'Promoção',
    },
    {
        id: 3,
        title: 'Kit com 3 figurinhas originais do Zequinha de 1979',
        price: 'R$ 12,00',
        prazo: 'Em até 2X',
        tipo: 'Promoção',
    },
    {
        id: 4,
        title: 'Kit com 3 figurinhas originais do Zequinha de 1979',
        price: 'R$ 12,00',
        prazo: 'Em até 2X',
        tipo: 'Promoção',
    },
    {
        id: 5,
        title: 'Kit com 3 figurinhas originais do Zequinha de 1979',
        price: 'R$ 12,00',
        prazo: 'Em até 2X',
        tipo: 'Promoção',
    },
]

export default function Home() {
    return (
        <div>
            <TopBar />
            <div name="promo">
                <h1>Produtos em Promoção</h1>
                <Grid container spacing={3}> 
                    <Grid item lg={2} md={4} sm={6} xs={12}>Item 1</Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>Item 2</Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>Item 3</Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>Item 4</Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>Item 5</Grid>
                </Grid>
            </div>
            <div name="news">
                <h1>Últimas Novidades</h1>
                <Grid container>
                    <Grid item lg={2}>
                        Item 1
                    </Grid>
                    <Grid item lg={2}>
                        Item 2
                    </Grid>
                    <Grid item lg={2}>
                        Item 3
                    </Grid>
                    <Grid item lg={2}>
                        Item 4
                    </Grid>
                    <Grid item lg={2}>
                        Item 5
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}