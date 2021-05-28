import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global.styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <NextSeo
        title="Blue Ocean App - The world is suffering from the polution that, we, humans, create."
        description="The app aims to bring awareness to that problem and become a tool to denounce and act. The MVP was developed in 48 hours and won the 3rd edition of Hackathon Aveiro from the Academia de Código."
        openGraph={{
          url: 'https://reactavancado.com.br/',
          title:
            'React Avançado - Crie aplicações reais com NextJS, GraphQL e mais.',
          description:
            'Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!',
          images: [{ url: 'https://reactavancado.com.br/img/cover.png' }],
          site_name: 'React Avançado',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@Willian_justen',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
