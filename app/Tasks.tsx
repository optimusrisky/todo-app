import { Task } from "@/types/types";
import clsx from "clsx";

interface Props {
  tasks: Task[];
  onCheckTask: (id: number) => void;
}

export const Tasks = ({ tasks, onCheckTask }: Props) => {
  const getTaskOrder = (id: number): "first" | "last" | "other" => {
    if (id === 1) return "first";
    if (id === tasks.length) return "last";
    return "other";
  };

  return (
    <div>
      {tasks.map((task) => (
        <button
          key={task.id}
          className={`p-4 flex items-center gap-2 border border-(--border-color) w-full ${clsx(
            {
              "rounded-xl": tasks.length === 1,
              "rounded-t-xl": getTaskOrder(task.id) === "first",
              "border-t-0": getTaskOrder(task.id) === "other",
              "border-t-0 rounded-b-xl": getTaskOrder(task.id) === "last",
            }
          )} `}
          onClick={() => onCheckTask(task.id)}
        >
          <input
            type="checkbox"
            id={task.id.toString()}
            name="title"
            checked={task.isCompleted}
            readOnly
          />
          <label className="flex gap-2 items-center text-xl">
            {task.title}
          </label>
        </button>
      ))}
    </div>
  );
};
