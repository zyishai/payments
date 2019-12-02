import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core';
import { theme } from '../src/theme';

class MaterialDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    <meta
                        name="theme-color"
                        content={theme.palette.primary.main}
                    />
                    <meta
                        name="description"
                        content="Nextjs with Material-UI"
                    />
                </Head>
                <body dir={theme.direction}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

/**
 * This is important! 
 * Otherwise, it will throw a warning of `Prop className did not match...` and ignore css styles.
 * @see https://github.com/mui-org/material-ui/issues/15073#issuecomment-522329464
 */
MaterialDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => 
        originalRenderPage({
            enhanceApp: App => props => sheets.collect(<App {...props} />)
        });
    
    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
}

export default MaterialDocument;