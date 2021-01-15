import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CategoryHeaderComponent from "../../components/CategoryHeader";
import SortByComponent from "../../components/SortBy";
import ProductList from "../ProductOverview/ProductList";
import productApi from "../../api/productApi";
import "./style.scss";

function Category() {
  const [listProduct, setListProduct] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const location = useLocation();

  useEffect(() => {
    const fetchListProduct = async () => {
      const listProduct = await productApi.getAll();

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
    <div className="category-page">
      <CategoryHeaderComponent
        category="all products"
        image="https://curnonwatch.com/media/catalog/category/MenCuff_1.jpg"
      />
      <SortByComponent onChange={handleSortByChange} />
      <ProductList listProduct={listProduct} />
    </div>
  );
}

export default Category;
