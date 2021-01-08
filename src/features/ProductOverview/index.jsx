import React, { useState, useEffect } from "react";
import "./style.scss";
import { useLocation } from "react-router-dom";
import productApi from "../../api/productApi";
import SortBy from "../../components/SortBy";
import ProductList from "./ProductList";

function ProductOverview() {
  const [listProduct, setListProduct] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchListProduct = async () => {
      const path = location.pathname;
      const listProduct = await productApi.getByCategory(path);
      setListProduct(listProduct);

      console.log(listProduct);
    };
    fetchListProduct();
  }, [location]);

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
        <ProductList listProduct={listProduct} />
      </div>
    </div>
  );
}

export default ProductOverview;
