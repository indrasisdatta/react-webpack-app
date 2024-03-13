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

const TodoList = () => {
  const [todoData, dispatchTodoData] = useReducer(DataReducer, defaultReducer);

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch("https://dummyjson.com/todos");
        const data = await resp.json();
        dispatchTodoData({ type: "DATA_LOAD_SUCCESS", data });
      } catch (e) {
        dispatchTodoData({ type: "DATA_LOAD_ERROR", data: e.message });
      }
    })();
  }, []);

  console.log("todoData", todoData);

  return (
    <div>
      <h2>To do List</h2>
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
export default TodoList;
