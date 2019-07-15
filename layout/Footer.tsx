import * as React from "react";

function Footer() {
  return (
    <>
      <style jsx>{`
        .footer {
          background-color: white;
        }

        .has-text-centered {
          padding-top: 70px;
        }
      `}</style>
      <footer className="footer" id="contact">
        <figure className="image container is-128x128">
          <img src="/static/me.jpeg" />
        </figure>
        <div className="content has-text-centered">
          <p>
            Asesora Sandra Sánchez en almacenes I.B.G en Girardot, Cundinamarca.
          </p>
          <p>
            Número de celular <a href="tel:3134894611">3134894611</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
