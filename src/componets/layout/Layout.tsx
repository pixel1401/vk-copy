import React , { FC, ReactElement, ReactNode } from "react";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


type LayoutProps = {
    children : ReactNode
}

export  const Layout:FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Grid container>
                <Grid xs={9}>
                    <Header />
                </Grid>
                <Grid xs={3}>
                    <Sidebar/>

                </Grid>

            </Grid>
            <div>
                {children}
            </div>
        </>
    )
}