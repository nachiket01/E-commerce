import React from 'react'
import  {ThemeProvider , CssBaseline } from "@mui/material"
import {createTheme} from "@mui/material/styles"
import Header from './Header';
import { Outlet } from 'react-router-dom';
const theme = createTheme({
    palette:{
        mode: 'light',
    }
,});

export default function Layout() {
  return (

    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main> <Outlet /> </main>
        <footer></footer>
    </ThemeProvider>

  );
}
