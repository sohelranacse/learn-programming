import { Html, Head, Main, NextScript } from 'next/document';
import NextNProgress from "nextjs-progressbar";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin='true'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <body>
                <NextNProgress />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
