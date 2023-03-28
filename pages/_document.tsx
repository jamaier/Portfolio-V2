import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
      </Head>
      <body  className='bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-black-500 dark:to-black-700'>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
