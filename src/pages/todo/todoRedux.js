import React, { useEffect, useState } from "react";
import todoSlice, { addTodo, fetchTodos } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/styled_components/Button";
import commonStyles from "../../components/css_modules/common.module.scss";
import { Loader } from "../../components/loader";

const TodoRedux = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todo);

  const [limit, setLimit] = useState(10);

  useEffect(() => {
    dispatch(fetchTodos({ limit }));
  }, [limit]);

  console.log("Todo data", todoData);

  const handleAddClick = (e) => {
    dispatch(addTodo({ id: 123, todo: "Test todo" }));
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className={commonStyles.heading}>To do Redux List</h2>
        </div>
        <div>
          <label>Show </label>
          <select
            className="border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={handleLimitChange}
            value={limit}
          >
            <option key="10" value="10">
              10
            </option>
            <option key="50" value="50">
              50
            </option>
            <option key="100" value="100">
              100
            </option>
          </select>
          <Button className="ml-3" onClick={handleAddClick}>
            Add Test
          </Button>
        </div>
      </div>

      {todoData.loading && (
        <div className="mt-3 flex justify-center items-center">
          <Loader width="w-14" height="h-14" />
        </div>
      )}
      {!todoData.loading && todoData.data?.todos?.length > 0 && (
        <>
          <ul>
            {todoData.data?.todos.map(({ id, todo }) => (
              <li key={id}>
                {id}. {todo}
              </li>
            ))}
          </ul>
        </>
      )}
      {!todoData.loading && todoData.error && <p>{todoData.error}</p>}
    </div>
  );
};

export default TodoRedux;
