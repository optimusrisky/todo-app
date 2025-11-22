"use client";
import { useState } from "react";

/** 検索フォームコンポーネント */
export const SearchForm = () => {
  const [inputtedTask, setInputtedTask] = useState("");

  /** フォーム送信 */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputtedTask);
    setInputtedTask("");
  };

  return (
    <div className="flex-4">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex gap-4">
          <input
            type="text"
            name="task"
            placeholder="タスクを入力してください"
            value={inputtedTask}
            onChange={(e) => setInputtedTask(e.target.value)}
          />
          <button type="submit" value={inputtedTask} className="main-button">
            追加
          </button>
        </div>
      </form>
    </div>
  );
};
