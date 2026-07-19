import React from "react";
import type { ITask } from "../../types/tasks";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <table className="border-collapse border border-gray-400" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th className="border border-gray-300">Task</th>
          <th className="border border-gray-300">Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}

      </tbody>
    </table>
  );
};

export default TodoList;
