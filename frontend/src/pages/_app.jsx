import Head from 'next/head';
import '../styles/globals.css';
import { useState, useEffect } from 'react';
import SpinnerInicio from '@/components/atoms/SpinnerInicio';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Bomba de Infusión</title>
        <link rel="icon" href="/nurshing.ico" />
      </Head>

      {loading ? <SpinnerInicio /> : <Component {...pageProps} />}
    </>
  );
}
