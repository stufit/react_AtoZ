import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const List = ({ todoData, setTodoData }) => {
  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    // filter 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환해줌.
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext>
        <Droppable>
          {todoData.map((data) => (
            <div key={data.id}>
              <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 rounded">
                <div className="items-center">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    onChange={() => handleCompleChange(data.id)}
                  />
                  {"    "}
                  <span className={data.completed ? "line-through" : undefined}>
                    {data.title}
                  </span>
                </div>
                <div className="items-center">
                  <button
                    className={"px-4 py-2 float-right"}
                    onClick={() => handleClick(data.id)}
                  >
                    x
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default List;
