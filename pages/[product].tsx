import * as React from "react";
import { useRouter } from "next/router";

function Product() {
  const { query } = useRouter();

  return <section className="section">hey</section>;
}

export default Product;
