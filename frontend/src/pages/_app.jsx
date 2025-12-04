import Head from "next/head";
import "../styles/globals.css";
import { useState, useEffect } from "react";

import SpinnerInicio from "@/components/atoms/SpinnerInicio";
import { DeviceProvider } from "@/contexts/DeviceContext";
import Seo from "@/components/seo/Seo";
import AppLayout from "@/components/templates/AppLayout";

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

      <Seo />

      <DeviceProvider>
        <AppLayout>
          {loading ? <SpinnerInicio /> : <Component {...pageProps} />}
        </AppLayout>
      </DeviceProvider>
    </>
  );
}
