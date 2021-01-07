import React, { useState } from "react";
import "./style.scss";
import SortBy from "../../components/SortBy";
import ProductList from "./ProductList";

function ProductOverview() {
  const [listProducts, setListProducts] = useState([]);

  return (
    <div className="product-overview">
      <div
        className="product-overview__header"
        style={{
          backgroundImage:
            "url(https://curnonwatch.com/media/catalog/category/collection_men_ring.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <h1>Melissani</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            rhoncus lectus id mattis varius. Duis quis velit elit. Donec
            ultricies, est ut vulputate mollis, nulla ante maximus tortor, ut
            laoreet ipsum dui vel arcu.
          </p>
        </div>
      </div>
      <div className="product-overview__filters">
        <SortBy />
      </div>
      <div className="product-overview__products">
        <ProductList />
      </div>
    </div>
  );
}

export default ProductOverview;
