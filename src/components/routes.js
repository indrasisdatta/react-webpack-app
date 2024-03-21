import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import TodoRedux from "../pages/todo/todoRedux";
import { Loader } from "./loader";

const ProductList = lazy(() =>
  import(/* webpackChunkName: 'ProductList' */ "../pages/products/productList")
);
const TodoList = lazy(() =>
  import(/* webpackChunkName: 'TodoList' */ "../pages/todo/todoList")
);

export const RouteComp = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="product" element={<ProductList />} />
        <Route path="to-do" element={<TodoList />} />
        <Route path="to-do-redux" element={<TodoRedux />} />
      </Routes>
    </Suspense>
  );
};
