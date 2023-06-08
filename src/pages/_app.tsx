import { App } from 'app/components';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const Root = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>test-medol</title>
        <meta name='application-name' content='test-medol' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='test-medol' />
        <meta name='description' content='test-medol' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/logo150х150.png'></link>
        <meta
          name='viewport'
          content=' width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <App>
        <Component {...pageProps} />
      </App>
    </>
  );
};

export default Root;
