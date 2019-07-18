import { useState, useMemo } from "react";

import { getJSONToRead } from "./getJSONToReact";

interface SearchValue {
  inputValue: string;
  selectValue: string;
}

function useSearch({ inputValue, selectValue }: SearchValue) {
  const [products, setProducts] = useState([]);

  useMemo(() => {
    const result = getJSONToRead(selectValue).filter(value =>
      `${value.name} ${value.description}`
        .toLowerCase()
        .includes(inputValue.toLowerCase())
    );

    setProducts(result);
  }, [inputValue, selectValue]);

  return { products };
}

export default useSearch;
