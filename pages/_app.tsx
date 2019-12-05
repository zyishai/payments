import React from 'react';
import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { theme } from '../src/theme';
import lang from '../src/lang';

import '../public/styles/index.scss'; // import global styles
import { ProfileMenu } from '../components/appbar-menu';
class MaterialApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <AppBar position="static" elevation={2} color='default'>
                        <Toolbar>
                            <Typography variant="h6">
                                {lang.appBarTitle}
                            </Typography>
                            <Box flex={1} />
                            <ProfileMenu />
                        </Toolbar>
                    </AppBar>
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        )
    }
}

export default MaterialApp;