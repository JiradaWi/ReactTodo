import React from "react";
import type { ITask } from "../../types/tasks";

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
          <tr key={task.id}>
            <td className="border border-gray-300">{task.text}</td>
            <td className="border border-gray-300">{task.completed}</td>
          </tr>
        ))}

      </tbody>
    </table>
  );
};

export default TodoList;
