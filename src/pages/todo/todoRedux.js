import React, { useEffect } from "react";
import todoSlice, { fetchTodos } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoRedux = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  console.log("Todo data", todoData);

  return (
    <div>
      <h2 className="heading">To do Redux</h2>
      {todoData.loading && <p>Loading...</p>}
      {!todoData.loading && todoData.data?.todos?.length > 0 && (
        <ul>
          {todoData.data?.todos.map(({ id, todo }) => (
            <li key={id}>{todo}</li>
          ))}
        </ul>
      )}
      {!todoData.loading && todoData.error && <p>{todoData.error}</p>}
    </div>
  );
};

export default TodoRedux;
