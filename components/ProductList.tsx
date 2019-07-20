import * as React from "react";

import useResize from "../utils/useResize";
import Linkify from "./Linkify";
import ProductFullScreen from "./ProductFullScreen";

function ProductList({
  searchValues,
  handleSearchValues,
  itemsSelectList,
  products
}) {
  const [openModalProduct, setopenModalProduct] = React.useState(null);
  const { width } = useResize();

  function handleOpenModalProduct(product) {
    setopenModalProduct(product);
  }

  return (
    <>
      <style jsx>{`
        .empty-content-padding {
          padding-top: 50px;
        }

        .button {
          width: 100%;
        }

        .control-select-expanded {
          padding-top: 0;
        }

        .select-expanded {
          width: auto;
        }

        figure.image:hover {
          cursor: pointer;
        }

        .input.is-primary,
        .select.is-primary *,
        .select.is-primary:not(:hover)::after {
          border-color: #3f51b5;
        }

        .select.is-primary select:focus,
        .input.is-primary:focus {
          box-shadow: 0 0 0 0.125em rgba(63, 81, 181, 0.25);
        }

        @media only screen and (max-width: 768px) {
          .control-select-expanded {
            padding-top: 0.75rem;
          }

          .select-expanded {
            width: 100vw;
          }
        }
      `}</style>

      {openModalProduct && (
        <ProductFullScreen
          isModalOpen={true}
          handleIsModalOpen={handleOpenModalProduct}
          product={openModalProduct}
        />
      )}

      <section className="section">
        <div className="container">
          <div className={`field ${width > 768 ? "is-grouped" : ""}`}>
            <div className="control is-expanded">
              <input
                className="input is-primary is-medium"
                type="search"
                placeholder="Busca lo que tú necesitas!"
                value={searchValues.inputValue}
                onChange={e =>
                  handleSearchValues({
                    ...searchValues,
                    inputValue: e.target.value
                  })
                }
              />
            </div>
            <div className="control control-select-expanded">
              <span className="select is-primary is-medium">
                <select
                  className="select-expanded"
                  value={searchValues.selectValue}
                  onChange={e =>
                    handleSearchValues({
                      ...searchValues,
                      selectValue: e.target.value
                    })
                  }
                >
                  {itemsSelectList.map((value, i) => (
                    <option value={value} key={i}>
                      {value}
                    </option>
                  ))}
                </select>
              </span>
            </div>
          </div>

          {products.length === 0 ? (
            <div className="content has-text-centered empty-content-padding">
              <h2 className={`subtitle ${width > 768 ? "" : "is-5"}`}>
                ¡El elemento no se encuentra 😓!
              </h2>
            </div>
          ) : (
            <div id="products" className="columns is-multiline">
              {products.map((product, i) => (
                <div className="column is-4-desktop" key={i}>
                  <div className="card">
                    <div className="card-image">
                      <figure
                        className="image is-4by3"
                        onClick={() => handleOpenModalProduct(product)}
                      >
                        <img src={product.image} alt={product.name} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{product.name}</p>
                        </div>
                      </div>

                      <div className="content">
                        <ul>
                          <Linkify
                            items={product.description.split("\n")}
                            amountItems={5}
                          />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ProductList;
