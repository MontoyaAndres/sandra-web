import * as React from "react";
import dynamic from "next/dynamic";
import scrollIntoView from "smooth-scroll-into-view-if-needed";

const DynamicHeaderBody = dynamic(() => import("./HeaderBody"), {
  ssr: false
});

function Header() {
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  function handleScrollIntoView(element: string) {
    const node = document.querySelector(element);

    scrollIntoView(node, {
      scrollMode: "if-needed",
      block: "start"
    });

    setIsMenuActive(false);
  }

  return (
    <>
      <style jsx>{`
        .hero .navbar {
          background: #3f51b5;
        }

        .navbar {
          position: fixed;
          width: 100%;
        }

        .navbar-item-title {
          font-family: "Lobster", cursive;
        }

        .is-primary {
          background-color: #3f51b5;
          color: white;
        }

        .navbar-burger {
          color: white;
        }

        .whatsapp-color {
          background-color: #00d1b2;
        }

        .whatsapp-color:hover {
          background-color: #00c4a7;
        }

        .hero.is-primary a.navbar-item:hover {
          background-color: #5c6bc0;
        }

        .notification {
          border-radius: 0;
        }

        .notification:not(:last-child) {
          margin: 0;
        }

        @media screen and (max-width: 1087px) {
          .hero.is-primary .navbar-menu {
            background-color: #3f51b5;
          }
        }
      `}</style>

      <section className="hero is-primary is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <span
                    className="title is-4 navbar-item-title"
                    onClick={() => handleScrollIntoView("#start")}
                  >
                    Asesora Sandra Sánchez
                  </span>
                </a>
                <span
                  className={`navbar-burger burger ${
                    isMenuActive ? "is-active" : ""
                  }`}
                  data-target="navbarMenuHeroB"
                  onClick={() => setIsMenuActive(!isMenuActive)}
                >
                  <span />
                  <span />
                  <span />
                </span>
              </div>

              <div
                id="navbarMenuHeroB"
                className={`navbar-menu ${isMenuActive ? "is-active" : ""}`}
              >
                <a
                  className="navbar-item"
                  onClick={() => handleScrollIntoView("#start")}
                >
                  Inicio
                </a>
                <a
                  className="navbar-item"
                  onClick={() => handleScrollIntoView("#products")}
                >
                  Productos
                </a>
                <a
                  className="navbar-item"
                  onClick={() => handleScrollIntoView("#combos")}
                >
                  Combos
                </a>
                <a
                  className="navbar-item"
                  onClick={() => handleScrollIntoView("#contact")}
                >
                  Contacto
                </a>

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <a
                        className="button is-primary whatsapp-color"
                        href="https://wa.me/+573134894611?text=Hola%20Sandra,%20estoy%20interesado%20en%20el%20producto%20"
                      >
                        <strong>WhatsApp</strong>
                      </a>
                      <a className="button is-light" href="tel:3134894611">
                        <strong>Celular</strong>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <DynamicHeaderBody />
      </section>
    </>
  );
}

export default Header;
