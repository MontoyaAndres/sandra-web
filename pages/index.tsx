import * as React from "react";
import dynamic from "next/dynamic";

import useSearch from "../utils/useSearch";
import Combos from "../data/combos.json";

const DynamicProductList = dynamic(() => import("../components/ProductList"), {
  ssr: false
});
const DynamicList = dynamic(() => import("../components/CarouselList"), {
  ssr: false
});

const selectValues = [
  "Alcobas",
  "Audio",
  "Colchones",
  "Comedores",
  "Complementos",
  "Congeladores",
  "Estufas",
  "Lavadoras",
  "Motos",
  "Neveras",
  "Salas",
  "Televisores",
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

      <DynamicList list={Combos} />
    </>
  );
}

export default index;
