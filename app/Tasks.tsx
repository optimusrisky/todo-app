import { Task } from "@/types/types";
import clsx from "clsx";

interface Props {
  tasks: Task[];
  onCheckTask: (id: number) => void;
}

export const Tasks = ({ tasks, onCheckTask }: Props) => {
  const getTaskOrder = (idx: number): "first" | "last" | "other" => {
    if (idx === 0) return "first";
    if (idx === tasks.length - 1) return "last";
    return "other";
  };

  return (
    <div>
      {tasks.map((task, idx) => (
        <div
          key={task.id}
          className={`p-4 flex items-center gap-2 border border-[var(--border-color)] w-full ${clsx(
            {
              "rounded-xl": tasks.length === 1,
              "rounded-t-xl": getTaskOrder(idx) === "first",
              "border-t-0": getTaskOrder(idx) === "other",
              "border-t-0 rounded-b-xl": getTaskOrder(idx) === "last",
            }
          )} `}
          onClick={() => onCheckTask(task.id)}
        >
          <input
            type="checkbox"
            id={task.id.toString()}
            checked={task.isCompleted}
            readOnly
          />
          <div
            className={`flex gap-2 items-center text-xl text-[var(--main-text-color)] break-all text-left cursor-default ${clsx(
              {
                "line-through decoration-[var(--main-text-color)]":
                  task.isCompleted,
              }
            )}`}
          >
            {task.title}
          </div>
        </div>
      ))}
    </div>
  );
};
