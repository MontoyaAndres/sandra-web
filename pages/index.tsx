import * as React from "react";
import dynamic from "next/dynamic";

import useSearch from "../utils/useSearch";

const DynamicProductList = dynamic(() => import("../components/ProductList"), {
  ssr: false
});

const selectValues = ["Alcobas", "Estufas", "Lavadoras", "Neveras", "Vitrinas"];

function index() {
  const [values, setValues] = React.useState({
    inputValue: "",
    selectValue: selectValues[0]
  });
  const [limit, setLimit] = React.useState(9);
  const [isButtonHide, setIsButtonHide] = React.useState(false);

  const { products } = useSearch(values, limit);

  React.useEffect(() => {
    if (limit > products.length) {
      setIsButtonHide(true);
    }
  }, [limit]);

  return (
    <>
      <style jsx>{`
        .button.is-primary {
          background-color: #3f51b5;
        }
      `}</style>

      <DynamicProductList
        searchValues={values}
        handleSearchValues={setValues}
        itemsSelectList={selectValues}
        products={products}
      />

      {!isButtonHide && (
        <div className="content has-text-centered">
          <button
            className="button is-primary is-large"
            onClick={() => setLimit(limit + 9)}
          >
            Ver más
          </button>
        </div>
      )}
    </>
  );
}

export default index;
