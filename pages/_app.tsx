import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Header, Footer} from "../components/Layout";


//define themes that are used across all styled-components.
// defines layouts across all components in the app i.e header and footer

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <ThemeProvider theme={theme}>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </ThemeProvider>
        )
    }
}
