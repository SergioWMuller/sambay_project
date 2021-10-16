import React, { useState, useEffect } from "react";
import Home from "./pages";
import Produto from "./pages/Product";
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#theme={theme}',
      main: '#23AAC0',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
})

export default function App() {

  const [pages, setPages] = useState(0)

  const LinkPages =(p)=>{
    if(p==0){
      window.open('http://localhost:3000?0','_self')
    } else if(p==1){
      window.open('http://localhost:3000?1','_self')
    } else if(p==2){
      window.open('http://localhost:3000?2','_self')
    } else if(p==3){
      window.open('http://localhost:3000?3','_self')
    } else if(p==4){
      window.open('http://localhost:3000?4','_self')
    } else if(p==5){
      window.open('http://localhost:3000?5','_self')
    } else if(p==6){
      window.open('http://localhost:3000?6','_self')
    } else if(p==7){
      window.open('http://localhost:3000?7','_self')
    } else if(p==8){
      window.open('http://localhost:3000?8','_self')
    } else if(p==9){
      window.open('http://localhost:3000?9','_self')
    } else if(p==10){
      window.open('http://localhost:3000?10','_self')
    }

  }

  const paginacao = () => {
    if (pages == 1) {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Home />
        </ThemeProvider>
      );
    }
    else {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Produto />
        </ThemeProvider>
      )
  }
}