import { ITask } from "@/types/tasks";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }: TaskProps) => {
    return (
        <tr key={task.id}>
            <td className="border border-gray-300">{task.text}</td>
            <td className="border border-gray-300">{task.completed}</td>
        </tr>
        )
  ;
}

export default Task;