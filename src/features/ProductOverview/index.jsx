import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productApi from "../../api/productApi";
import SortByComponent from "../../components/SortBy";
import ProductList from "./ProductList";
import "./style.scss";

function ProductOverview() {
  const [listProduct, setListProduct] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    const fetchListProduct = async () => {
      const path = location.pathname;
      const listProduct = await productApi.getByCategory(path);

      if ("default" === sortBy) {
        setListProduct(listProduct);
      } else {
        const newProductList = listProduct.sort((a, b) => {
          return "ascending" === sortBy ? a.price - b.price : b.price - a.price;
        });
        setListProduct(newProductList);
      }
    };
    fetchListProduct();
  }, [location, sortBy]);

  function handleSortByChange(value) {
    setSortBy(value);
  }

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
        <SortByComponent onChange={handleSortByChange} />
      </div>
      <div className="product-overview__products">
        <ProductList listProduct={listProduct} />
      </div>
    </div>
  );
}

export default ProductOverview;
