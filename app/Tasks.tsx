import { Task } from "@/types/types";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { TbTrash } from "react-icons/tb";

interface Props {
  tasks: Task[];
  onCheckTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

/** タスク表示コンポーネント */
export const Tasks = ({ tasks, onCheckTask, onDeleteTask }: Props) => {
  const searchParams = useSearchParams();

  const isCompleted = searchParams.get("isCompleted");
  const createdAt = searchParams.get("createdAt");

  /** Filtersによってフィルタリングされたタスク */
  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    // isCompletedでフィルタリング
    if (isCompleted === "true") {
      result = result.filter((task) => task.isCompleted);
    } else if (isCompleted === "false") {
      result = result.filter((task) => !task.isCompleted);
    }
    // isCompletedがnullの場合は全て表示（フィルタリングしない）

    // createdAtでソート
    if (createdAt === "asc") {
      result.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateA - dateB;
      });
    } else if (createdAt === "desc") {
      result.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA;
      });
    }
    // createdAtがnullの場合は既定の順番（ソートしない）
    // フィルタリング条件がない場合はそのまま返却
    return result;
    // tasks, isCompleted, createdAtが変更された時のみ再計算
  }, [tasks, isCompleted, createdAt]);

  /** 要素の順番を判定する関数 */
  const getTaskOrder = (idx: number): "first" | "last" | "other" => {
    if (idx === 0) return "first";
    if (idx === filteredTasks.length - 1) return "last";
    return "other";
  };

  return (
    <div>
      {filteredTasks.map((task, idx) => (
        <div
          key={task.id}
          className={`p-4 flex flex-nowrap justify-between border border-[var(--border-color)] w-full ${clsx(
            {
              "rounded-xl": filteredTasks.length === 1,
              "rounded-t-xl": getTaskOrder(idx) === "first",
              "border-t-0": getTaskOrder(idx) === "other",
              "border-t-0 rounded-b-xl": getTaskOrder(idx) === "last",
            }
          )} `}
        >
          <div className="flex items-center gap-2">
            <div>
              <input
                type="checkbox"
                id={task.id.toString()}
                checked={task.isCompleted}
                onChange={() => onCheckTask(task.id)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor={task.id.toString()}
                className={`flex gap-2 items-center text-lg text-[var(--main-text-color)] break-all text-left cursor-default ${clsx(
                  {
                    "line-through decoration-[var(--main-text-color)]":
                      task.isCompleted,
                  }
                )}`}
              >
                {task.title}
              </label>
              <div className="py-1 px-2 bg-[var(--tag-bg-color)] rounded-lg text-md w-fit">
                追加日: {new Date(task.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          <button onClick={() => onDeleteTask(task.id)}>
            <TbTrash className="text-[var(--alert-color)] w-6 h-6" />
          </button>
        </div>
      ))}
    </div>
  );
};
