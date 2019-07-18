import React from "react";

import useResize from "../utils/useResize";

function HeaderBody() {
  const { width } = useResize();

  return (
    <>
      <style jsx>{`
        .wave {
          position: absolute;
          width: 100%;
          height: 143px;
          bottom: 0;
          left: 0;
          background: url(/static/wave.png);
          animation: animate 10s linear infinite;
        }

        .wave:before {
          content: "";
          width: 100%;
          height: 143px;
          background: url(/static/wave.png);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.4;
          animation: animate-reverse 10s linear infinite;
        }

        .wave:after {
          content: "";
          width: 100%;
          height: 143px;
          background: url(/static/wave.png);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.6;
          animation-delay: -5s;
          animation: animate 20s linear infinite;
        }

        @keyframes animate {
          0% {
            background-position: 0;
          }

          100% {
            background-position: 1360px;
          }
        }

        @keyframes animate-reverse {
          0% {
            background-position: 1360px;
          }

          100% {
            background-position: 0;
          }
        }

        @media only screen and (max-width: 600px) {
          .wave {
            display: none;
            animation: none;
          }

          .wave:before {
            animation: none;
          }

          .wave:after {
            animation: none;
          }
        }
      `}</style>

      <div className="hero-body">
        <div className="container has-text-centered">
          <p className={`title ${width > 768 ? "is-1" : "is-3"}`}>
            Lo que tú necesites, lo encuentras en el almacen I.B.G con la
            asesoría de Sandra Sánchez.
          </p>
        </div>
      </div>

      <div className="wave" />
    </>
  );
}

export default HeaderBody;
