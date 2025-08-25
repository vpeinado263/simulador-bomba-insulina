import Head from "next/head";


export default function App({ Component, pageProps }) {
    return (
        <>
         <Head>
            <title>Bomba de Insulina</title>
            <link rel="icon" href="/nurshing.ico" />
         </Head>
         <Component {...pageProps} />
        </>
    )
}