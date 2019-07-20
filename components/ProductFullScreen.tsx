import * as React from "react";

function ProductFullScreen({ isModalOpen, handleIsModalOpen, product }) {
  return (
    <>
      <style global jsx>{`
        // remove scrollbar from body.
        html,
        body {
          overflow: hidden;
          position: relative;
        }

        .container {
          overflow-y: scroll;
        }
      `}</style>

      <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => handleIsModalOpen(null)}
        />
        <div className="modal-content">
          <p className="image is-4by3">
            <img src={product.image} alt={product.name} />
          </p>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => handleIsModalOpen()}
        />
      </div>
    </>
  );
}

export default ProductFullScreen;
