import * as React from "react";
import dynamic from "next/dynamic";

import useSearch from "../utils/useSearch";

const DynamicProductList = dynamic(() => import("../components/ProductList"), {
  ssr: false
});

const selectValues = [
  "Alcobas",
  "Estufas",
  "Lavadoras",
  "Neveras",
  "Salas",
  "Vitrinas"
];

function index() {
  const [values, setValues] = React.useState({
    inputValue: "",
    selectValue: selectValues[0]
  });
  const { products } = useSearch(values);

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
    </>
  );
}

export default index;
