import React, { useEffect, useReducer } from "react";

const defaultReducer = {
  loading: true,
  data: [],
  error: null,
};

const DataReducer = (state, action) => {
  //   console.log("Data reducer", state, action);
  if (action.type === "DATA_LOAD_SUCCESS") {
    return {
      loading: false,
      data: action.data,
      error: null,
    };
  } else if (action.type === "DATA_LOAD_ERROR") {
    return {
      loading: false,
      data: [],
      error: action.data,
    };
  }
  return state;
};

const ProductList = () => {
  const [productData, dispatchProductData] = useReducer(
    DataReducer,
    defaultReducer
  );

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch("https://dummyjson.com/products");
        const data = await resp.json();
        dispatchProductData({ type: "DATA_LOAD_SUCCESS", data });
      } catch (e) {
        dispatchProductData({ type: "DATA_LOAD_ERROR", data: e.message });
      }
    })();
  }, []);

  console.log("productData", productData);

  return (
    <div>
      <h2 className="heading">Products List</h2>
      {productData.loading && <p>Loading...</p>}
      {!productData.loading && productData.data?.products?.length > 0 && (
        <ul>
          {productData.data?.products.map(({ id, title, rating, category }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
      {!productData.loading && productData.error && <p>{productData.error}</p>}
    </div>
  );
};
export default ProductList;
