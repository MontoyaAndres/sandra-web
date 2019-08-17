import * as React from "react";
import dynamic from "next/dynamic";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import { useRouter } from "next/router";
import Link from "next/link";

import useResize from "../utils/useResize";

const DynamicHeaderBody = dynamic(() => import("./HeaderBody"), {
  ssr: false
});

function Header() {
  const { pathname } = useRouter();
  const { width } = useResize();

  function handleScrollIntoView(element: string) {
    const node = document.querySelector(element);

    scrollIntoView(node, {
      scrollMode: "if-needed",
      block: "start"
    });
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

        .navbar-brand {
          justify-content: space-between;
        }

        .container {
          display: initial;
        }

        .navbar-item-title {
          font-family: "Lobster", cursive;
        }

        .is-primary {
          background-color: #3f51b5;
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

      <section
        className={`hero is-primary ${pathname === "/" ? "is-fullheight" : ""}`}
      >
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <div className="navbar-item">
                  <Link href="/">
                    <a className="title is-4 navbar-item-title">
                      Asesora Sandra Sánchez
                    </a>
                  </Link>
                </div>

                <div className="navbar-item">
                  <a
                    className="button is-light"
                    onClick={() => handleScrollIntoView("#contact")}
                  >
                    <strong>{width > 600 ? "Contacto" : "📞"}</strong>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {pathname === "/" && <DynamicHeaderBody />}
      </section>
    </>
  );
}

export default Header;
