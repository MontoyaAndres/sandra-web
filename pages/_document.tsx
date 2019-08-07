import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Lo que tú necesites, lo encuentras en el almacen I.B.G con la asesoría de Sandra Sánchez. Más información +573213726060"
          />
          <meta
            name="keywords"
            content="Madera,Producto,Electrodoméstico,IBG,Almacen,Ventas,Neveras,Televisores,Motos,Computadores,Sillas,Salas"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />

          {/* Android */}
          <meta name="theme-color" content="#3f51b5" />
          <meta name="mobile-web-app-capable" content="yes" />

          {/* iOS */}
          <meta
            name="apple-mobile-web-app-title"
            content="Asesora Sandra Sánchez"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          {/* Pinned Sites */}
          <meta name="application-name" content="Asesora Sandra Sánchez" />
          <meta
            name="msapplication-tooltip"
            content="Lo que tú necesites, lo encuentras en el almacen I.B.G con la asesoría de Sandra Sánchez. Más información +573213726060"
          />
          <meta name="msapplication-starturl" content="/" />

          {/* Tap highlighting  */}
          <meta name="msapplication-tap-highlight" content="no" />

          {/* UC Mobile Browser */}
          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />

          {/* imagemode - show image even in text only mode */}
          <meta name="imagemode" content="force" />

          <meta
            property="og:title"
            content="Lo que tú necesites, lo encuentras en el almacen I.B.G con la asesoría de Sandra Sánchez. Más información +573213726060"
          />
          <meta property="og:locale" content="es_CO" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/static/favicon.ico" />
          <meta property="og:site_name" content="Asesora Sandra Sánchez" />
          <link
            href="https://fonts.googleapis.com/css?family=Lobster|Roboto&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
            integrity="sha256-8B1OaG0zT7uYA572S2xOxWACq9NXYPQ+U5kHPV1bJN4="
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://unpkg.com/flickity@2.2.1/dist/flickity.css"
          />
        </Head>

        <body>
          <style jsx>{`
            html,
            body {
              font-family: "Roboto", sans-serif;
              background-color: white;
            }
          `}</style>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
