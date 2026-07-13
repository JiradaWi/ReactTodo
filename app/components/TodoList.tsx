import React from "react";

const TodoList = () => {
  return (
    <table className="border-collapse border border-gray-400">
      <thead>
        <tr>
          <th className="border border-gray-300">Task</th>
          <th className="border border-gray-300">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td className="border border-gray-300">Malcolm Lockyer</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TodoList;
