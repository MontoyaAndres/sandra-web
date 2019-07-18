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
      block: "nearest",
      inline: "nearest"
    });
  }

  return (
    <>
      <style jsx>{`
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

        .hero.is-primary a.navbar-item:hover {
          background-color: #5c6bc0;
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
                    id="start"
                    className="title is-4 navbar-item-title"
                    onClick={() => handleScrollIntoView("#start")}
                  >
                    Asesora Sandra Sánchez
                  </span>
                </a>
                <span
                  className="navbar-burger burger"
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
                <div className="navbar-end">
                  <a
                    id="start"
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
                    onClick={() => handleScrollIntoView("#contact")}
                  >
                    Contacto
                  </a>
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
