import React from 'react';
import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { theme } from '../src/theme';
import lang from '../src/lang';

class MaterialApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                {lang.appBarTitle}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        )
    }
}

export default MaterialApp;