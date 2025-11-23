"use client";

import { Task } from "@/types/types";
import { useEffect, useState } from "react";
import { Tasks } from "./Tasks";

/** 検索フォームコンポーネント */
export const SearchForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  // 初期表示時、localStorageに保存されたタスクを取得する
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!!savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

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
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
    // localStorageへ保存
    localStorage.setItem("tasks", JSON.stringify(newTasks));
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
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <>
      <div className="flex gap-4 w-full">
        <form onSubmit={(e) => handleSubmit(e)} className="w-full">
          <div className="flex gap-4">
            <input
              type="text"
              name="task"
              placeholder="タスクを入力してください"
              value={taskTitle}
              className="flex-1"
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
