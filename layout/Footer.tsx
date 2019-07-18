import * as React from "react";

function Footer() {
  return (
    <>
      <style jsx>{`
        .footer {
          background-color: white;
        }

        .footer-image-center {
          display: flex;
          justify-content: center;
        }

        .footer-title {
          font-family: "Lobster", cursive;
        }

        .image {
          width: 30vh;
        }

        .footer-section-image {
          padding: 3rem 1.5rem;
        }

        @media only screen and (max-width: 768px) {
          .footer-section-image {
            padding: 0 1.5rem;
          }
        }
      `}</style>
      <footer className="footer" id="contact">
        <div className="columns">
          <div className="column">
            <section className="section">
              <h2 className="title is-2 footer-title">Contacto</h2>
              <p>
                Asesora Sandra Sánchez en almacenes I.B.G en Girardot,
                Cundinamarca.
              </p>
              <p>
                Más información llamando al número de celular{" "}
                <a href="tel:3134894611">3134894611</a> o escribiéndome en{" "}
                <a href="https://wa.me/+573134894611?text=Hola%20Sandra,%20estoy%20interesado%20en%20el%20producto%20">
                  WhatsApp
                </a>
                .
              </p>
            </section>
          </div>

          <div className="column footer-image-center">
            <section className="footer-section-image">
              <figure className="image">
                <img src="/static/me.jpeg" alt="Sandra Sánchez" />
              </figure>
            </section>
          </div>

          <div className="column">
            <section className="section">
              <h2 className="title is-2 footer-title">Formas de pago</h2>
              <ul>
                <li>Pago único con I.B.G.</li>
                <li>Corto plazo con I.B.G.</li>
                <li>Largo plazo con nuestro aliado Promodescuento.</li>
              </ul>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
