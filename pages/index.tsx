import * as React from "react";

import useSearch from "../utils/useSearch";

function index() {
  const [value, status, setValue] = useSearch();

  return (
    <>
      <style jsx>{`
        .empty-content-padding {
          padding-top: 50px;
        }
      `}</style>
      <section className="section">
        <div className="container">
          <div className="field">
            <label className="label">Busca lo que tú necesitas!</label>
            <div className="control">
              <input
                id="products"
                className="input"
                type="email"
                placeholder="e.g. Televisor"
              />
            </div>
          </div>

          {status === "" && (
            <div className="content has-text-centered empty-content-padding">
              <h2 className="subtitle">¿Qué estas buscando ahora mismo 🤔?</h2>
            </div>
          )}

          {status === "none" && (
            <div className="content has-text-centered empty-content-padding">
              <h2 className="subtitle">¡El elemento no se encuentra 😓!</h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default index;
