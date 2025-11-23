"use client";
import { Task } from "@/types/types";
import { useState } from "react";
import { Tasks } from "./Tasks";

/** 検索フォームコンポーネント */
export const SearchForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  /** フォーム送信 */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const now = new Date().toLocaleString();
    const newTask: Task = {
      id: tasks.length + 1,
      title: taskTitle,
      isCompleted: false,
      createdAt: now,
    };
    setTasks((prev) => [...prev, newTask]);
    console.log(tasks);
    setTaskTitle("");
  };

  /** タスクチェック時 */
  const handleCheckTask = (id: number) => {
    const checkedTask = tasks.find((task) => task.id === id) as Task;
    const newTasks = tasks.map((task) => {
      if (task === checkedTask)
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      else return task;
    });
    setTasks(newTasks);
  };

  return (
    <>
      <div className="flex gap-4">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex gap-4">
            <input
              type="text"
              name="task"
              placeholder="タスクを入力してください"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <button
              type="submit"
              value={taskTitle}
              disabled={!taskTitle}
              className="main-button"
            >
              追加
            </button>
          </div>
        </form>
      </div>
      <Tasks tasks={tasks} onCheckTask={handleCheckTask} />
    </>
  );
};
