import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import SortByComponent from "../../components/SortBy";
import ProductList from "./ProductList";
import "./style.scss";
import CategoryHeaderComponent from "../../components/CategoryHeader";

function ProductOverview() {
  const [listProduct, setListProduct] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const location = useLocation();
  const params = useParams();

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
      <CategoryHeaderComponent
        category={params.categoryId}
        image="https://curnonwatch.com/media/catalog/category/MenCuff_1.jpg"
      />
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
