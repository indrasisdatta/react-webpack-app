import React, { useEffect } from "react";
import todoSlice, { addTodo, fetchTodos } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/styled_components/Button";

const TodoRedux = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  console.log("Todo data", todoData);

  const handleAddClick = (e) => {
    dispatch(addTodo({ id: 123, todo: "Test todo" }));
  };

  return (
    <div>
      <h2 className="heading">To do Redux</h2>
      {todoData.loading && <p>Loading...</p>}
      {!todoData.loading && todoData.data?.todos?.length > 0 && (
        <>
          <Button onClick={handleAddClick}>Add Test</Button>
          <ul>
            {todoData.data?.todos.map(({ id, todo }) => (
              <li key={id}>{todo}</li>
            ))}
          </ul>
        </>
      )}
      {!todoData.loading && todoData.error && <p>{todoData.error}</p>}
    </div>
  );
};

export default TodoRedux;
