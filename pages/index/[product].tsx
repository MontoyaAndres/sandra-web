import * as React from "react";
import { useRouter } from "next/router";

function Product() {
  const { query } = useRouter();
  return <h1>{JSON.stringify(query)}</h1>;
}

export default Product;
