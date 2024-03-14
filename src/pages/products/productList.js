import React, { useEffect, useReducer } from "react";
import commonStyles from "../../components/css_modules/common.module.scss";
import productStyles from "../../components/css_modules/product.module.scss";
import { Button } from "../../components/styled_components/Button";
Button;

const defaultReducer = {
  loading: true,
  data: [],
  error: null,
  limit: 30,
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case "DATA_LOAD_SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
        limit: action.limit,
      };
    case "DATA_LOAD_ERROR":
      return {
        loading: false,
        data: [],
        error: action.data,
        limit: null,
      };
    case "UPDATE_PRODUCT_COUNT":
      return {
        ...state,
        limit: action.limit,
      };
    default:
      return state;
  }
};

const ProductList = () => {
  const [productData, dispatchProductData] = useReducer(
    DataReducer,
    defaultReducer
  );

  useEffect(() => {
    (async () => {
      console.log("Product limit API fetch", productData.limit);
      if (productData.limit) {
        try {
          const resp = await fetch(
            `https://dummyjson.com/products?limit=${productData.limit || 30}`
          );
          const data = await resp.json();
          dispatchProductData({
            type: "DATA_LOAD_SUCCESS",
            data,
            limit: productData.limit,
          });
        } catch (e) {
          dispatchProductData({ type: "DATA_LOAD_ERROR", data: e.message });
        }
      }
    })();
  }, [productData.limit]);

  const showProductsCount = (prodCount) => {
    if (prodCount) {
      dispatchProductData({
        type: "UPDATE_PRODUCT_COUNT",
        limit: Number(prodCount),
      });
    }
  };

  return (
    <div>
      <h2 className={commonStyles.heading}>Products List</h2>
      {productData.loading && <p>Loading...</p>}
      {!productData.loading && productData.data?.products?.length > 0 && (
        <>
          <p className={productStyles.heading}>
            Showing {productData.data?.products?.length} products
          </p>
          <Button
            color="#fff"
            backgroundcolor="#000"
            onClick={() => showProductsCount(100)}
          >
            Show 100
          </Button>
          &nbsp;
          <Button onClick={() => showProductsCount(30)}>Show 30</Button>
          <ul className="mt-2">
            {productData.data?.products.map(
              ({ id, title, rating, category }) => (
                <li key={id}>{title}</li>
              )
            )}
          </ul>
        </>
      )}
      {!productData.loading && productData.error && <p>{productData.error}</p>}
    </div>
  );
};
export default ProductList;
